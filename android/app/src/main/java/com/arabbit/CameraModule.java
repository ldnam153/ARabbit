package com.arabbit;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.jetbrains.annotations.NotNull;

import java.util.Map;
import java.util.HashMap;

public class CameraModule extends ReactContextBaseJavaModule {
    CameraModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CameraModule";
    }
    @ReactMethod
    public void openCamera(){
        Intent intent = new Intent(getCurrentActivity(), VuforiaActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}