package com.levantador.alarmbridge;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import android.widget.Toast;


public class AlarmModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext = null;

    public AlarmModule(ReactApplicationContext context) {
        super(context);

        reactContext = context;
    }

    @Override
    public String getName() {
        return "Alarm";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
       
        constants.put("EXAMPLE_CONSTANT", "example");

        return constants;
    }

    @ReactMethod
    public void exampleMethod (String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    /**
        Even though the CLI didn't work, this code is copied from react-native-create-bridge/master/templates/java
        Thanks!
     */
}