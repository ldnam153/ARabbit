/*===============================================================================
Copyright (c) 2020, PTC Inc. All rights reserved.
 
Vuforia is a trademark of PTC Inc., registered in the United States and other
countries.
===============================================================================*/

#include "AppController.h"

#include "MathUtils.h"
#include "Log.h"

#include <Vuforia/Vuforia.h>
#include <Vuforia/Tool.h>
#include <Vuforia/DataSet.h>
#include <Vuforia/Device.h>
#include <Vuforia/Renderer.h>
#include <Vuforia/CameraDevice.h>
#include <Vuforia/VideoBackgroundConfig.h>
#include <Vuforia/UpdateCallback.h>
#include <Vuforia/Matrices.h>
#include <Vuforia/State.h>
#include <Vuforia/TrackerManager.h>
#include <Vuforia/ObjectTracker.h>
#include <Vuforia/Trackable.h>
#include <Vuforia/StateUpdater.h>
#include <Vuforia/ModelTarget.h>
#include <Vuforia/VideoBackgroundTextureInfo.h>
#include <Vuforia/ImageTargetResult.h>
#include <Vuforia/ModelTargetResult.h>
#include <Vuforia/RenderingPrimitives.h>
#include <Vuforia/PositionalDeviceTracker.h>
#include <Vuforia/DeviceTrackableResult.h>
#include <Vuforia/GuideView.h>
#include <Vuforia/Image.h>
#include <Vuforia/ObjectTracker.h>
#include <Vuforia/TargetFinder.h>
#include <Vuforia/CloudRecoSearchResult.h>
#if defined(ANDROID) || defined (__ANDROID__)  // ANDROID
#include <Vuforia/Android/Vuforia_Android.h>
#include <Vuforia/GLRenderer.h>
#elif defined(WINAPI_FAMILY) // UWP
#include <Vuforia/UWP/Vuforia_UWP.h>
#include <Vuforia/UWP/DXRenderer.h>
#else // iOS
#include <Vuforia/iOS/Vuforia_iOS.h>
#include <Vuforia/iOS/MetalRenderer.h>
#endif

#include <algorithm>
#include <cmath>
#include <functional>
#include <string>


namespace
{
    constexpr char licenseKey[] = "AY4ZNZz/////AAABmUz6BF1zm0xLgVYhgjW5IOoh5QI+jjWlIsJTh5x4yntPkWWtl8NNZXTjV9a6C+OVJtxqiqNeOSrpMPYdQH1cA0PGdrmv+Gg8Pj2VOmI4UBZBIn3lLUN9iqZWkNVU6XyHpDDg3yOZplWgXwHaYNza9lihAzFt/OnR43w6COI2HhPX5sb8QN8CTOxA8DHnLDMU/j87SCNsAGFHOwuGntyfWleRSjR8xJnIebCGzX8EB56yt9ugAQXr4blynSdihoSlEiD6K+ZKkbnSBHqGe+f3SZ0zKBqFCHamjUo+1kMxWmfRdye3qKGf/hdOohtd5DApJRxSkw+VUzDbGVAZL/rnUlIc1eWJ8N8idyqfAQlRlF65";

    constexpr float NEAR_PLANE = 0.01f;
    constexpr float FAR_PLANE = 5.f;
    Vuforia::TargetFinder* finder;

    const char* const kAccessKey = "82e9981b1ce72bc06990433a6f169a9e9991c80d";
    const char* const kSecretKey = "113142dd4ea4f0d896cd574bfe9cdc9b843fef52";
}


/*===============================================================================
AppController public methods
===============================================================================*/

void AppController::initAR(const InitConfig& initConfig, int target)
{
    mVuforiaInitFlags = initConfig.vuforiaInitFlags;
    mShowErrorCallback = initConfig.showErrorCallback;
    mInitDoneCallback = initConfig.initDoneCallback;
    mTarget = target;

    mDoneOneTimeRenderingConfiguration = false;
    mCameraIsActive = false;
    mCameraIsStarted = false;

    mGuideViewModelTarget = nullptr;

    if (!initVuforiaInternal(initConfig.appData))
    {
        return;
    }
    
    if (!initTrackers())
    {
        return;
    }



    mInitDoneCallback();
}


bool AppController::startAR()
{
    if (mCameraIsStarted || mCameraIsActive)
    {
        LOG("Application logic error, attempt to startAR when already started");
        return false;
    }

    // initialize the camera
    if (! Vuforia::CameraDevice::getInstance().init())
    {
        mShowErrorCallback("Không thể khởi tạo camera. Vui lòng thử l");
        return false;
    }

    // select the default video mode
    if(! Vuforia::CameraDevice::getInstance().selectVideoMode(mCameraMode))
    {
        mShowErrorCallback("Failed to set the camera mode");
        return false;
    }

    // set the FPS to its recommended value
    int recommendedFps = Vuforia::Renderer::getInstance().getRecommendedFps();
    Vuforia::Renderer::getInstance().setTargetFps(recommendedFps);

    if (!startTrackers() )
    {
        mShowErrorCallback("Failed to start trackers");
        return false;
    }

    if (!Vuforia::CameraDevice::getInstance().start())
    {
        mShowErrorCallback("Failed to start the camera");
        return false;
    }

    // Set camera to autofocus
    if (!Vuforia::CameraDevice::getInstance().setFocusMode(Vuforia::CameraDevice::FOCUS_MODE_CONTINUOUSAUTO))
    {
        LOG("Failed to set camera to continuous autofocus, camera may not support this");
    }

    mCameraIsActive = true;
    mCameraIsStarted = true;
    return true;
    
}


void AppController::pauseAR()
{
    bool successfullyPaused = true;
    std::string cameraErrorMessage;
    
    if (mCameraIsActive)
    {
        // Stop and deinit the camera
        if(! Vuforia::CameraDevice::getInstance().stop())
        {
            cameraErrorMessage = "Error stopping the camera";
            successfullyPaused = false;
        }
        if(! Vuforia::CameraDevice::getInstance().deinit())
        {
            cameraErrorMessage = "Error de-initializing the camera";
            successfullyPaused = false;
        }
        mCameraIsActive = false;
    }

    stopTrackers();

    Vuforia::onPause();
    
    if(!successfullyPaused)
    {
        LOG("Error pausing AR: %s",cameraErrorMessage.c_str());
    }
}


void AppController::resumeAR()
{
    Vuforia::onResume();

    startTrackers();
    
    std::string cameraErrorMessage;
    bool successfullyResumed = true;
    // if the camera was previously started, but not currently active, then
    // we restart it
    if ((mCameraIsStarted) && (!mCameraIsActive))
    {
        
        // initialize the camera
        if ( !Vuforia::CameraDevice::getInstance().init() )
        {
            cameraErrorMessage = "Failed to initialize the camera.";
            successfullyResumed = false;
        }
        else if ( !Vuforia::CameraDevice::getInstance().start() )
        {
            cameraErrorMessage = "Failed to start the camera.";
            successfullyResumed = false;
        }
        else
        {
             mCameraIsActive = true;
        }
    }
    
    if(!successfullyResumed)
    {
        LOG("Error resuming AR: %s", cameraErrorMessage.c_str());
    }

    if (mCameraIsStarted)
    {
        updateRenderingPrimitives();
    }
}


void AppController::stopAR()
{
    // Stop the camera
    if (mCameraIsActive)
    {
        // Stop and deinit the camera
        Vuforia::CameraDevice::getInstance().stop();
        Vuforia::CameraDevice::getInstance().deinit();
        mCameraIsActive = false;
    }
    mCameraIsStarted = false;

    // Stop trackers
    stopTrackers();
}


void AppController::deinitAR()
{
    Vuforia::onPause();
    finder->deinit();
    // ask the application to unload the data associated to the trackers
    if(!unloadTrackerData())
    {
        LOG("Error unloading tracker data.");
    }

    // ask the application to deinit the trackers
    deinitTrackers();

    Vuforia::deinit();
}


void AppController::cameraPerformAutoFocus()
{
    Vuforia::CameraDevice::getInstance().setFocusMode(Vuforia::CameraDevice::FOCUS_MODE_TRIGGERAUTO);
}


void AppController::cameraRestoreAutoFocus()
{
    Vuforia::CameraDevice::getInstance().setFocusMode(Vuforia::CameraDevice::FOCUS_MODE_CONTINUOUSAUTO);
}


void AppController::updateRenderingPrimitives()
{
    mCurrentRenderingPrimitives.reset(new Vuforia::RenderingPrimitives(Vuforia::Device::getInstance().getRenderingPrimitives()));
}


bool AppController::configureRendering(int width, int height, int orientation)
{
    if (!mCameraIsStarted)
    {
        return false;
    }

    mOrientation = orientation;
    mDisplayAspectRatio = (float)width / height;

    setVuforiaOrientation(orientation);

    if (!mDoneOneTimeRenderingConfiguration)
    {
        mDoneOneTimeRenderingConfiguration = true;
        // Tell Vuforia Engine we've created a drawing surface
        Vuforia::onSurfaceCreated();
    }

    int smallerSize = std::min(width, height);
    int largerSize = std::max(width, height);
    if (isScreenPortrait())
    {
        Vuforia::onSurfaceChanged(smallerSize, largerSize);
    }
    else
    {
        Vuforia::onSurfaceChanged(largerSize, smallerSize);
    }

    configureVideoBackground(float(width), float(height));

    return true;
}


bool AppController::prepareToRender(double* viewport, Vuforia::RenderData* renderData,
                                    Vuforia::TextureUnit* videoBackgroundTextureUnit, Vuforia::TextureData* videoBackgroundTexture)
{
    mVuforiaState = Vuforia::TrackerManager::getInstance().getStateUpdater().updateState();
    auto& renderer = Vuforia::Renderer::getInstance();
    renderer.begin(mVuforiaState, renderData);

    if (mCurrentRenderingPrimitives == nullptr)
    {
        updateRenderingPrimitives();
    }
    
    // Set up the viewport
    Vuforia::Vec4I viewportInfo;
    // We're writing directly to the screen, so the viewport is relative to the screen
    viewportInfo = mCurrentRenderingPrimitives->getViewport(Vuforia::VIEW_SINGULAR);
    viewport[0] = viewportInfo.data[0];
    viewport[1] = viewportInfo.data[1];
    viewport[2] = viewportInfo.data[2];
    viewport[3] = viewportInfo.data[3];
    viewport[4] = 0.0f;
    viewport[5] = 1.0f;

    if (videoBackgroundTexture != nullptr)
    {
        renderer.setVideoBackgroundTexture(*videoBackgroundTexture);
    }

    return renderer.updateVideoBackgroundTexture(videoBackgroundTextureUnit);
}


void AppController::finishRender(Vuforia::RenderData* renderData)
{
    Vuforia::Renderer::getInstance().end(renderData);
}


bool AppController::getOrigin(Vuforia::Matrix44F& projectionMatrix,
                              Vuforia::Matrix44F& modelViewMatrix)
{
    auto origin = mVuforiaState.getDeviceTrackableResult();
    if (origin != nullptr)
    {
        if (origin->getStatus() == Vuforia::TrackableResult::STATUS::TRACKED &&
            origin->getStatusInfo() == Vuforia::TrackableResult::STATUS_INFO::NORMAL)
        {
            Vuforia::Matrix44F viewMatrix = Vuforia::Tool::convertPose2GLMatrix(origin->getPose());
            modelViewMatrix = MathUtils::Matrix44FTranspose(MathUtils::Matrix44FInverse(viewMatrix));

            projectionMatrix = Vuforia::Tool::convertPerspectiveProjection2GLMatrix(
                mCurrentRenderingPrimitives->getProjectionMatrix(Vuforia::VIEW_SINGULAR,
                                                                 mVuforiaState.getCameraCalibration()),
                NEAR_PLANE, FAR_PLANE);

            return true;
        }
    }

    return false;
}


std::string AppController::getImageTargetResult(Vuforia::Matrix44F& projectionMatrix,
                                         Vuforia::Matrix44F& modelViewMatrix,
                                         Vuforia::Matrix44F& scaledModelViewMatrix)
{
    Vuforia::TargetFinderQueryResult queryResults = finder->updateQueryResults();
    for (const Vuforia::TargetSearchResult* result: queryResults.results) {
        {
            const Vuforia::CloudRecoSearchResult* cloudRecoResult = static_cast<const    Vuforia::CloudRecoSearchResult*>(result);
            // Get the target metadata
            const char* metadata = cloudRecoResult->getMetaData();
            // Check if this target is suitable for tracking:
            //  if (cloudRecoResult->getTrackingRating() > 0)
            //    {
            // Enable this target for tracking:
            //       finder->enableTracking(*cloudRecoResult);
            //}
            return (std::string) cloudRecoResult->getTargetName();
        }
    }
    /*const auto& trackableResultList = mVuforiaState.getTrackableResults();
    for (const auto* result : trackableResultList)
    {
        LOG("%s", result->getTrackable().getName());
        if (result->isOfType(Vuforia::ImageTargetResult::getClassType()) && mTarget == IMAGE_TARGET_ID)
        {
            const Vuforia::ImageTargetResult* itResult = static_cast<const Vuforia::ImageTargetResult*>(result);
            const Vuforia::ImageTarget& target = itResult->getTrackable();

            Vuforia::Matrix44F viewMatrix = Vuforia::Tool::convertPose2GLMatrix(mVuforiaState.getDeviceTrackableResult()->getPose());
            viewMatrix = MathUtils::Matrix44FTranspose(MathUtils::Matrix44FInverse(viewMatrix));

            // Get the projection matrix
            projectionMatrix = Vuforia::Tool::convertPerspectiveProjection2GLMatrix(
                mCurrentRenderingPrimitives->getProjectionMatrix(Vuforia::VIEW_SINGULAR,
                                                                 mVuforiaState.getCameraCalibration()),
                NEAR_PLANE, FAR_PLANE);

            // Get object pose and populate modelViewMatrix
            modelViewMatrix = Vuforia::Tool::convertPose2GLMatrix(result->getPose());
            MathUtils::multiplyMatrix(viewMatrix, modelViewMatrix, modelViewMatrix);

            // Calculate a scaled modelViewMatrix for rendering a unit bounding box
            auto targetSize = target.getSize();
            // z-dimension will be zero for planar target
            // set it here to the larger dimension so that
            // a 3D augmentation can be shown
            targetSize.data[2] = std::max(targetSize.data[0], targetSize.data[1]);
            scaledModelViewMatrix = MathUtils::Matrix44FScale(targetSize, modelViewMatrix);

            return true;
        }
    }
    */
    return (std::string) "";
}




/*===============================================================================
AppController private methods
===============================================================================*/

bool AppController::initVuforiaInternal(void* appData)
{
#if defined (__ANDROID__)  // ANDROID
    Vuforia::setInitParameters(jobject(appData), mVuforiaInitFlags, licenseKey);

#elif defined(WINAPI_FAMILY) // UWP
    (void)appData;
    Vuforia::setInitParameters(licenseKey);

#elif defined(__APPLE__)// iOS
    Vuforia::setInitParameters(mVuforiaInitFlags, licenseKey);

#else
#error "Unsupported platform"
#endif

    // Vuforia::init() will return positive numbers up to 100 as it progresses
    // towards success.  Negative numbers indicate error conditions
    int progress = 0;
    while (progress >= 0 && progress < 100)
    {
        progress = Vuforia::init();
    }
    
    if (progress == 100)
    {
        return true;
    }
    
    // Failed to initialise Vuforia Engine:
    std::string cameraAccessErrorMessage = "";

    switch(progress)
    {
        case Vuforia::INIT_NO_CAMERA_ACCESS:
            // On most platforms the user must explicitly grant camera access
            // If the access request is denied this code is returned
            cameraAccessErrorMessage = "Vuforia cannot initialize because access to the camera was denied.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_NO_NETWORK_TRANSIENT:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license check encountered a temporary network error.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_NO_NETWORK_PERMANENT:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license check encountered a permanent network error.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_INVALID_KEY:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license key is invalid.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_CANCELED_KEY:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license key was cancelled.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_MISSING_KEY:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license key was missing.";
            break;
                
        case Vuforia::INIT_LICENSE_ERROR_PRODUCT_TYPE_MISMATCH:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the license key is for the wrong product type.";
            break;
                
        case Vuforia::INIT_DEVICE_NOT_SUPPORTED:
            cameraAccessErrorMessage = "Vuforia failed to initialize because the device is not supported.";
            break;
                
        default:
            cameraAccessErrorMessage = "Không thể khởi tạo camera. Hãy thử lại.";
            break;
    }
    // Vuforia Engine initialization error
    mShowErrorCallback(cameraAccessErrorMessage.c_str());

    return false;
}


void AppController::setVuforiaOrientation(int orientation) const
{
#if defined(ANDROID) || defined (__ANDROID__)  // ANDROID
    
#elif defined(WINAPI_FAMILY) // UWP
    switch (orientation)
    {
    case 0: // Portrait
        Vuforia::setCurrentOrientation(Vuforia::DISPLAY_ORIENTATION::PORTRAIT);
        break;
    case 1: // "PortraitUpsideDown"
        Vuforia::setCurrentOrientation(Vuforia::DISPLAY_ORIENTATION::PORTRAIT_FLIPPED);
        break;
    case 2: // "LandscapeLeft"
        Vuforia::setCurrentOrientation(Vuforia::DISPLAY_ORIENTATION::LANDSCAPE);
        break;
    case 3: // "LandscapeRight"
        Vuforia::setCurrentOrientation(Vuforia::DISPLAY_ORIENTATION::LANDSCAPE_FLIPPED);
        break;
    }

#else // iOS
    switch (orientation)
    {
        case 0: // Portrait
            Vuforia::setRotation(Vuforia::ROTATE_IOS_90);
            break;
        case 1: // "PortraitUpsideDown"
            Vuforia::setRotation(Vuforia::ROTATE_IOS_270);
            break;
        case 2: // "LandscapeLeft"
            Vuforia::setRotation(Vuforia::ROTATE_IOS_180);
            break;
        case 3: // "LandscapeRight"
            Vuforia::setRotation(Vuforia::ROTATE_IOS_0);
            break;
    }
#endif    
}


bool AppController::initTrackers()
{
    // Initialize the object tracker
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();
    Vuforia::Tracker* trackerBase = trackerManager.initTracker(Vuforia::ObjectTracker::getClassType());
    if (trackerBase == NULL)
    {
        LOG("Error: Failed to initialize ObjectTracker.");
        mShowErrorCallback("Error initializing the object tracker");
        return false;
    }
    Vuforia::ObjectTracker* objectTracker = static_cast<Vuforia::ObjectTracker*>(trackerManager.getTracker(Vuforia::ObjectTracker::getClassType()));

    finder = objectTracker->getTargetFinder (Vuforia::ObjectTracker::TargetFinderType::CLOUD_RECO);

    // Initialize Cloud Reco with project credentials:
    if (finder->startInit(kAccessKey, kSecretKey))
    {
        finder->waitUntilInitFinished();
    }
    if (finder == nullptr)
    {
        LOG("Error: Failed to initialise the Device tracker (it may have been initialised already)");
        mShowErrorCallback("Error initializing the device tracker");
        return false;
    }
    



    return true;
}


bool AppController::loadTrackerData()
{
    if (mCurrentDataSet != nullptr)
    {
        mShowErrorCallback("Attempt to load a dataset when one is already loaded");
        return false;
    }

    if (mTarget == IMAGE_TARGET_ID)
    {
        mCurrentDataSet = loadAndActivateDataSet("StonesAndChips.xml");
        if (mCurrentDataSet == nullptr)
        {
            mShowErrorCallback("Error loading dataset for Image Target");
            return false;
        }
    }

    return true;
}


bool AppController::unloadTrackerData()
{
    // Get the image tracker:
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();
    Vuforia::ObjectTracker* objectTracker = static_cast<Vuforia::ObjectTracker*>(trackerManager.getTracker(Vuforia::ObjectTracker::getClassType()));
    if (objectTracker == nullptr)
    {
        return false;
    }

    if (!objectTracker->deactivateDataSet(mCurrentDataSet))
    {
        LOG("Warning: Failed to deactivate the data set.");
    }

    if (!objectTracker->destroyDataSet(mCurrentDataSet))
    {
        LOG("Warning: Failed to destory the data set.");
    }

    mCurrentDataSet = nullptr;

    return true;
}


bool AppController::startTrackers()
{
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();
    Vuforia::Tracker* deviceTracker = trackerManager.getTracker(Vuforia::PositionalDeviceTracker::getClassType());
    finder->startRecognition();
    if(deviceTracker != 0)
    {
        deviceTracker->start();
    }
    Vuforia::Tracker* tracker = trackerManager.getTracker(Vuforia::ObjectTracker::getClassType());
    if(tracker == 0)
    {
        return false;
    }
    tracker->start();
    return true;
}


void AppController::stopTrackers()
{
    // Stop the tracker
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();

    // Stop the object tracker
    Vuforia::Tracker* objectTracker = trackerManager.getTracker(Vuforia::ObjectTracker::getClassType());
    finder->stop();
    if (objectTracker != nullptr)
    {
        objectTracker->stop();
        LOG("Successfully stopped the ObjectTracker");
    }
    else
    {
        LOG("Error: Failed to get the ObjectTracker from the tracker manager");
    }

    Vuforia::Tracker* deviceTracker = trackerManager.getTracker(Vuforia::PositionalDeviceTracker::getClassType());

    if (deviceTracker != nullptr)
    {
        deviceTracker->stop();
        LOG("Successfully stopped the PositionalDeviceTracker");
    }
    else
    {
        LOG("Error: Failed to get the PositionalDeviceTracker from the tracker manager");
    }
}


void AppController::deinitTrackers()
{
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();
    trackerManager.deinitTracker(Vuforia::ObjectTracker::getClassType());
    trackerManager.deinitTracker(Vuforia::PositionalDeviceTracker::getClassType());
}


void AppController::configureVideoBackground(float viewWidth, float viewHeight)
{
    // Get the default video mode
    Vuforia::CameraDevice& cameraDevice = Vuforia::CameraDevice::getInstance();
    Vuforia::VideoMode videoMode = cameraDevice.getCurrentVideoMode();
    
    // Configure the video background
    Vuforia::VideoBackgroundConfig config;
    config.mPosition.data[0] = 0;
    config.mPosition.data[1] = 0;
    
    // Determine the orientation of the view.  Note, this simple test assumes
    // that a view is portrait if its height is greater than its width.  This is
    // not always true: it is perfectly reasonable for a view with portrait
    // orientation to be wider than it is high.  The test is suitable for the
    // dimensions used in this sample
    if (isScreenPortrait())
    {
        // --- View is portrait ---
        
        // Compare aspect ratios of video and screen.  If they are different we
        // use the full screen size while maintaining the video's aspect ratio,
        // which naturally entails some cropping of the video
        float aspectRatioVideo = (float)videoMode.mWidth / (float)videoMode.mHeight;
        float aspectRatioView = viewHeight / viewWidth;
        
        if (aspectRatioVideo < aspectRatioView)
        {
            // Video (when rotated) is wider than the view: crop left and right
            // (top and bottom of video)
            
            // --============--
            // - =          = _
            // - =          = _
            // - =          = _
            // - =          = _
            // - =          = _
            // - =          = _
            // - =          = _
            // - =          = _
            // --============--
            
            config.mSize.data[0] = int(videoMode.mHeight * (viewHeight / float(videoMode.mWidth)));
            config.mSize.data[1] = int(viewHeight);
        }
        else
        {
            // Video (when rotated) is narrower than the view: crop top and
            // bottom (left and right of video).  Also used when aspect ratios
            // match (no cropping)
            
            // ------------
            // -          -
            // -          -
            // ============
            // =          =
            // =          =
            // =          =
            // =          =
            // =          =
            // =          =
            // =          =
            // =          =
            // ============
            // -          -
            // -          -
            // ------------
            
            config.mSize.data[0] = int(viewWidth);
            config.mSize.data[1] = int(videoMode.mWidth * (viewWidth / float(videoMode.mHeight)));
        }
        
    }
    else
    {
        // --- View is landscape ---
        
        // Compare aspect ratios of video and screen.  If they are different we
        // use the full screen size while maintaining the video's aspect ratio,
        // which naturally entails some cropping of the video
        float aspectRatioVideo = (float)videoMode.mWidth / (float)videoMode.mHeight;
        float aspectRatioView = viewWidth / viewHeight;
        
        if (aspectRatioVideo < aspectRatioView)
        {
            // Video is taller than the view: crop top and bottom
            
            // --------------------
            // ====================
            // =                  =
            // =                  =
            // =                  =
            // =                  =
            // ====================
            // --------------------
            
            config.mSize.data[0] = int(viewWidth);
            config.mSize.data[1] = int(videoMode.mHeight * (viewWidth / float(videoMode.mWidth)));
        }
        else
        {
            // Video is wider than the view: crop left and right.  Also used
            // when aspect ratios match (no cropping)
            
            // ---====================---
            // -  =                  =  -
            // -  =                  =  -
            // -  =                  =  -
            // -  =                  =  -
            // ---====================---
            
            config.mSize.data[0] = int(videoMode.mWidth * (viewHeight / float(videoMode.mHeight)));
            config.mSize.data[1] = int(viewHeight);
        }
        
    }
    
    // Set the config
    Vuforia::Renderer::getInstance().setVideoBackgroundConfig(config);
    updateRenderingPrimitives();
}


Vuforia::DataSet* AppController::loadAndActivateDataSet(std::string path)
{
    LOG("Loading data set from %s", path.c_str());
    Vuforia::DataSet* dataSet = nullptr;

    // Get the Vuforia tracker manager image tracker
    Vuforia::TrackerManager& trackerManager = Vuforia::TrackerManager::getInstance();
    Vuforia::ObjectTracker* objectTracker = static_cast<Vuforia::ObjectTracker*>(trackerManager.getTracker(Vuforia::ObjectTracker::getClassType()));

    if (objectTracker == nullptr)
    {
        LOG("Error: Failed to get the ObjectTracker from the TrackerManager");
    }
    else
    {
        dataSet = objectTracker->createDataSet();
        if (dataSet == nullptr)
        {
            LOG("Error: Failed to create data set");
        }
        else
        {
            // Load the data set from the app's resources
            if (!dataSet->load(path.c_str(), Vuforia::STORAGE_APPRESOURCE))
            {
                LOG("Error: Failed to load data set");
                objectTracker->destroyDataSet(dataSet);
                dataSet = nullptr;
            }
            else
            {
                if (!objectTracker->activateDataSet(dataSet))
                {
                    LOG("Error: Failed to activate data set");
                    objectTracker->destroyDataSet(dataSet);
                    dataSet = nullptr;
                }
            }
        }
    }

    return dataSet;
}
