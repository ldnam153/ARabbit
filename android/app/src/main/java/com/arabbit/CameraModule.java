package com.arabbit;
import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class CameraModule extends ReactContextBaseJavaModule {
    CameraModule(ReactApplicationContext context) {
        super(context);
    }
    @NonNull
    @Override
    public String getName() {
        return "CameraModule";
    }
    static ReactContext reactContext;
    @ReactMethod
    public void openCamera(){
        reactContext = this.getReactApplicationContext();
        Intent intent = new Intent(getCurrentActivity(), VuforiaActivity.class);
        getCurrentActivity().startActivity(intent);

    }
    static public void sendEvent(String eventName,@Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}