package com.levantador.alarmbridge;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;
import java.io.*; 

import android.app.AlarmManager;
import android.widget.Toast;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.Context;
import android.os.SystemClock;

import com.levantador.alarmbridge.AlarmReceiver;

public class AlarmModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext = null;
    private AlarmReceiver alarmReceiver;


    public AlarmModule(ReactApplicationContext context) {
        super(context);

        reactContext = context;

        alarmReceiver = new AlarmReceiver();

        context.registerReceiver(alarmReceiver, new IntentFilter("REACT_NATIVE_ALARM"));
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
        //Toast.makeText(getReactApplicationContext(), message, duration).show();

        set();
    }

    @ReactMethod
    public void set() {       

        AlarmManager alarmManager = (AlarmManager) reactContext.getSystemService(Context.ALARM_SERVICE);

        Intent intent = new Intent("REACT_NATIVE_ALARM");
        PendingIntent pendingIntent = PendingIntent.getBroadcast(reactContext, 243, intent, PendingIntent.FLAG_UPDATE_CURRENT);

        alarmManager.setRepeating(AlarmManager.ELAPSED_REALTIME_WAKEUP,
        SystemClock.elapsedRealtime() +
        1000, 1000, pendingIntent);

    }
    /**
        Even though the CLI didn't work, this code is copied from react-native-create-bridge/master/templates/java
        Thanks!
     */
}