/*===============================================================================
Copyright (c) 2020 PTC Inc. All Rights Reserved.

Vuforia is a trademark of PTC Inc., registered in the United States and other
countries.
===============================================================================*/

package com.arabbit


import android.app.Activity
import android.content.DialogInterface
import android.content.res.AssetManager
import android.opengl.GLSurfaceView
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.*
import android.view.GestureDetector.SimpleOnGestureListener
import android.view.ViewGroup
import android.widget.Button
import android.widget.LinearLayout
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NavUtils
import androidx.core.view.GestureDetectorCompat
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
    private lateinit var mDescription: TextView
    private lateinit var mPanel: LinearLayout
    // Native methods
    external fun initAR(activity : Activity, assetManager : AssetManager, target : Int)
    external fun deinitAR()

    external fun startAR() : Boolean
    external fun stopAR()

    external fun pauseAR()
    external fun resumeAR()

    external fun cameraPerformAutoFocus()
    external fun cameraRestoreAutoFocus()

    external fun initRendering()
    external fun setTextures(astronautWidth: Int, astronautHeight: Int, astronautBytes: ByteBuffer,
                             landerWidth: Int, landerHeight: Int, landerBytes: ByteBuffer)
    external fun deinitRendering()
    external fun configureRendering(width : Int, height : Int, orientation : Int) : Boolean
    external fun renderFrame() : String
    var timeBegin : Long = 0
    var timeEnd : Long = 0
    // Activity methods
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        System.loadLibrary("VuforiaSample")
        setContentView(R.layout.activity_vuforia)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            var windowParams = window.getAttributes();
            windowParams.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(windowParams);
        }

        mVuforiaStarted = false
        mSurfaceChanged = true

        // Create an OpenGL ES 3.0 context (also works for 3.1, 3.2)
        mGLView = findViewById(R.id.cameraview)
        mGLView.holder.addCallback(this)
        mGLView.setEGLContextClientVersion(3)
        mGLView.setRenderer(this)
        // Hide the GLView until we are ready
        mGLView.visibility = View.GONE

        mName = findViewById(R.id.name)
        mDescription = findViewById(R.id.description)
        mPanel = findViewById(R.id.panel)
        mPanel.setOnClickListener(View.OnClickListener {

        })
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
        mVuforiaStarted = false;
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
        return GlobalScope.async(Dispatchers.Default) {
            initAR(this@VuforiaActivity, this@VuforiaActivity.assets, mTarget)
        }.await()
    }


    private fun presentError(message : String) {
        val builder: AlertDialog.Builder? = this.let {
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
                    mName.text = didRender
                    mPanel.visibility = View.VISIBLE
                }
            }
            /*  else{
                  val calendar = Calendar.getInstance()
                  timeEnd = calendar.timeInMillis
                  if (timeEnd - timeBegin >= 2000)
                  {
                      timeBegin = timeEnd
                      GlobalScope.launch(Dispatchers.Main) {
                          mView.text = didRender
                          mButton.visibility = View.INVISIBLE
                      }
                  }
              }*/
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

}
