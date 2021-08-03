package com.arabbit


import android.annotation.SuppressLint
import android.app.Activity
import android.content.DialogInterface
import android.content.res.AssetManager
import android.opengl.GLSurfaceView
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.util.Log
import android.view.*
import android.view.GestureDetector.SimpleOnGestureListener
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NavUtils
import androidx.core.view.GestureDetectorCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import kotlinx.coroutines.*
import java.nio.ByteBuffer
import java.util.*
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.opengles.GL10
import kotlin.concurrent.schedule


/**
 * Activity to demonstrate how to use Vuforia Image Target and Model Target features,
 * Video Background rendering and Vuforia lifecycle.
 */
class VuforiaActivity : AppCompatActivity(), GLSurfaceView.Renderer, SurfaceHolder.Callback {

    private lateinit var mGLView : GLSurfaceView

    private var mTarget = 0
    private var mProgressIndicatorLayout: RelativeLayout? = null

    private var mWidth = 0
    private var mHeight = 0

    private var mVuforiaStarted = false
    private var mSurfaceChanged = false

    private var mGestureDetector : GestureDetectorCompat? = null
    private lateinit var mName: TextView
    private lateinit var mPanel: LinearLayout
    private lateinit var mBack: ImageButton
    private lateinit var mCapture: ImageButton
    private lateinit var mRotate: ImageButton
    private lateinit var mPicture: ImageButton
    private lateinit var mViewDetail: ImageButton
    private lateinit var mAddToCart: ImageButton
    private lateinit var mShop: TextView
    private lateinit var mDescription: TextView
    private lateinit var mIconShop: ImageView
    private lateinit var mImage: ImageView
    private lateinit var mSold : TextView
    private lateinit var mPrice: TextView
    private lateinit var mMsg: TextView
    private lateinit var mNumberStar: LinearLayout
    private lateinit var mAlert: LinearLayout
    // Native methods
    private external  fun initAR(activity : Activity, assetManager : AssetManager, target : Int)
    private external  fun deinitAR()

    private external  fun startAR() : Boolean
    private external fun stopAR()

    private external  fun pauseAR()
    private external  fun resumeAR()

    private external  fun cameraPerformAutoFocus()
    private external  fun cameraRestoreAutoFocus()

    private external  fun initRendering()
    private external fun setTextures(astronautWidth: Int, astronautHeight: Int, astronautBytes: ByteBuffer,
                             landerWidth: Int, landerHeight: Int, landerBytes: ByteBuffer)
    private external fun deinitRendering()
    private external  fun configureRendering(width : Int, height : Int, orientation : Int) : Boolean
    private external  fun renderFrame() : String
    private  var productID: String = ""
    val products: ArrayList<ProductModel> = MainActivity.products;
    // Activity methods
    open fun setTimeoutSync(runnable: java.lang.Runnable, delay: Int) {
        try {
            Thread.sleep(delay.toLong())
            runnable.run()
        } catch (e: java.lang.Exception) {
            System.err.println(e)
        }
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_vuforia)
        System.loadLibrary("VuforiaSample")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            val windowParams = window.attributes
            windowParams.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
            window.attributes = windowParams
        }

        mVuforiaStarted = false
        mSurfaceChanged = true
        // Create an OpenGL ES 3.0 context (also works for 3.1, 3.2)
        mGLView = findViewById(R.id.cameraview)
        mBack = findViewById(R.id.back)
        mCapture = findViewById(R.id.picture)
        mRotate = findViewById(R.id.capture)
        mPicture = findViewById(R.id.rotate)
        mAlert = findViewById(R.id.alert)
        mViewDetail = findViewById(R.id.view_detail)
        mViewDetail.setOnClickListener {
            var params: WritableMap = Arguments.createMap();
            params.putString("event", EventNative.typeView);
            params.putString("product", productID);
            CameraModule.sendEvent("EventReminder", params);
            finish();
        }
        mAddToCart = findViewById(R.id.add_to_cart)
        mAddToCart.setOnClickListener {
            mAlert.visibility = View.VISIBLE

            val handler = Handler()
            val runnable = java.lang.Runnable {
                mAlert.visibility = View.INVISIBLE
            }



            handler.postDelayed(runnable, 1500)
            var params: WritableMap = Arguments.createMap();
            params.putString("event", EventNative.typeAddToCart);
            params.putString("product", productID);
            CameraModule.sendEvent("EventReminder", params);
        }
        mGLView.holder.addCallback(this)
        mGLView.setEGLContextClientVersion(3)
        mGLView.setRenderer(this)
        cameraPerformAutoFocus()
        // Hide the GLView until we are ready
        mBack.setOnClickListener {
            onBackPressed()
        }
        mName = findViewById(R.id.name)
        mDescription = findViewById(R.id.description)
        mShop = findViewById(R.id.shop)
        mIconShop = findViewById(R.id.iconShop)
        mImage = findViewById(R.id.image)
        mPrice = findViewById(R.id.price)
        mNumberStar = findViewById(R.id.listStar)
        mSold = findViewById(R.id.sold)
        mMsg = findViewById(R.id.msg)
        mPanel = findViewById(R.id.panel)
        mPanel.setOnClickListener {

        }
        // Prevent screen from dimming
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        // Make the Activity completely full screen
        mGLView.systemUiVisibility =
            View.SYSTEM_UI_FLAG_LOW_PROFILE or
                    View.SYSTEM_UI_FLAG_FULLSCREEN or
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE or
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
                    View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                    View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        // Setup and show a progress indicator
        mProgressIndicatorLayout = View.inflate(
            applicationContext,
            R.layout.progress_indicator, null
        ) as RelativeLayout

        addContentView(
            mProgressIndicatorLayout, ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        )

        // Start Vuforia initialization in a coroutine
        GlobalScope.launch(Dispatchers.Unconfined) {
            initializeVuforia()
        }

        mGestureDetector = GestureDetectorCompat(this, GestureListener())
    }


    override fun onPause() {
        pauseAR()
        super.onPause()
    }


    override fun onResume() {
        super.onResume()

        if (mVuforiaStarted) {
            GlobalScope.launch(Dispatchers.Unconfined) {
                resumeAR()
            }
        }
    }


    override fun onBackPressed() {
        stopAR()
        mVuforiaStarted = false
        deinitAR()
        super.onBackPressed()
    }


    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        val id = item.itemId
        if (id == android.R.id.home) {
            // This ID represents the Home or Up button.
            NavUtils.navigateUpFromSameTask(this)
            return true
        }
        return super.onOptionsItemSelected(item)
    }


    // Overrider onTouchEvent to connect it to our GestureListener
    override fun onTouchEvent(event: MotionEvent?): Boolean {
        mGestureDetector?.onTouchEvent(event)
        return super.onTouchEvent(event)
    }


    /// Custom GestureListener to capture single and double tap
    inner class GestureListener : SimpleOnGestureListener() {
        override fun onSingleTapUp(e: MotionEvent): Boolean {
            // Calls the Autofocus Native Method
            cameraPerformAutoFocus()
            GlobalScope.launch(Dispatchers.Main) {
                mPanel.visibility = View.INVISIBLE
                productID = "";
                mMsg.visibility = View.VISIBLE
            }
            // After triggering a focus event wait 2 seconds
            // before restoring continuous autofocus
            Timer("RestoreAutoFocus", false).schedule(2000) {
                cameraRestoreAutoFocus()
            }

            return true
        }

        override fun onDoubleTap(e: MotionEvent): Boolean {
            return true
        }
    }


    private suspend fun initializeVuforia() {
        return withContext(Dispatchers.Default) {
            initAR(this@VuforiaActivity, this@VuforiaActivity.assets, mTarget)
        }
    }


    private fun presentError(message : String) {
        val builder: AlertDialog.Builder = this.let {
            AlertDialog.Builder(it)
        }

        builder?.setMessage(message)
        builder?.setTitle(R.string.error_dialog_title)
        builder?.setPositiveButton(R.string.ok,
            DialogInterface.OnClickListener { _, _ ->
                stopAR()
                deinitAR()
                this@VuforiaActivity.finish()
            })

        // This is called from another coroutine not on the Main thread
        // Showing the UI needs to be on the main thread
        GlobalScope.launch(Dispatchers.Main) {
            val dialog: AlertDialog? = builder?.create()
            dialog?.show()
        }
    }


    private fun initDone() {
        mVuforiaStarted = startAR()
        if (!mVuforiaStarted) {
            Log.e("VuforiaSample", "Failed to start AR")
        }
        // Show the GLView
        GlobalScope.launch(Dispatchers.Main) {
            mGLView.visibility = View.VISIBLE
        }
    }


    // GLSurfaceView.Renderer methods
    override fun onSurfaceCreated(unused: GL10, config: EGLConfig) {
        initRendering()
    }


    override fun onDrawFrame(unused: GL10) {
        if (mVuforiaStarted) {

            if (mSurfaceChanged) {
                mSurfaceChanged = false

                // This sample doesn't support auto-rotation, landscape orientation is hard coded here
                configureRendering(mWidth, mHeight, /* Landscape Left */1)
            }
            GlobalScope.launch(Dispatchers.Main) {
                if (mProgressIndicatorLayout?.visibility != View.GONE)
                    mProgressIndicatorLayout?.visibility = View.GONE

            }
            // OpenGL rendering of Video Background and augmentations is implemented in native code
            var didRender = renderFrame()
            if (didRender.isNotEmpty() ) {
                GlobalScope.launch(Dispatchers.Main) {
                    if (productID != didRender) {
                        mMsg.visibility = View.INVISIBLE
                        if(mPanel.visibility != View.VISIBLE)
                            mPanel.visibility = View.VISIBLE

                        // mName.text = didRender
                        productID = didRender
                        var p = getProductById(didRender)

                        if (p != null){
                            renderInformation(p)
                            var params: WritableMap = Arguments.createMap();
                            params.putString("event", EventNative.typeDetected);
                            params.putString("product", productID);
                            CameraModule.sendEvent("EventReminder", params);
                        }
                    }
                }
            }

        }
    }


    override fun onSurfaceChanged(unused: GL10, width: Int, height: Int) {
        // Store values for later use
        mWidth = width
        mHeight = height

        // Re-load textures in case they got destroyed
        var astronautTexture = Texture.loadTextureFromApk("Astronaut.jpg", assets)
        var landerTexture = Texture.loadTextureFromApk("VikingLander.jpg", assets)
        if (astronautTexture != null && landerTexture != null) {
            setTextures(
                astronautTexture.width, astronautTexture.height, astronautTexture.data!!,
                landerTexture.width, landerTexture.height, landerTexture.data!!
            )
        } else {
            Log.e("VuforiaSample", "Failed to load astronaut or lander texture");
        }

        // Update flag to tell us we need to update Vuforia configuration
        mSurfaceChanged = true
    }

    // SurfaceHolder.Callback
    override fun surfaceCreated(var1: SurfaceHolder?) {}


    override fun surfaceChanged(var1: SurfaceHolder?, var2: Int, var3: Int, var4: Int) {}


    override fun surfaceDestroyed(var1: SurfaceHolder?) {
        deinitRendering()
    }
    fun getProductById(id: String): ProductModel? {
        for(product in products){
            if (product.id == id)
                return product
        }
        return null
    }
    private fun renderInformation(p :ProductModel?){
        if (p==null)
            return;

        mName.text = p.name
        mShop.text = p.shop
        mSold.text = "Đã bán " + p.sold.toString()
        mPrice.text = p.price
        mDescription.text = p.description
        mName.text = p.name
        mIconShop.setImageDrawable(p.iconShop)
        mImage.setImageDrawable(p.image)
        renderStar(p.numberStar)
    }
    @SuppressLint("UseCompatLoadingForDrawables")
    private fun renderStar(number : Int){

        for(i: Int in 0..4){
            val star: ImageView = mNumberStar.getChildAt(i) as ImageView
            if (i < number)
                star.setImageDrawable(getDrawable(R.drawable.yellowstar))
            else
                star.setImageDrawable(getDrawable(R.drawable.graystar))
        }
    }



}
