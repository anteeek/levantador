package com.levantador.alarmbridge;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;
import java.util.Calendar;
import java.io.*; 

import android.app.AlarmManager;
import android.widget.Toast;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.Context;
import android.os.SystemClock;
import android.content.SharedPreferences;

import android.app.Activity;

import com.levantador.alarmbridge.AlarmReceiver;
import com.levantador.MainActivity;

public class AlarmModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext = null;
    private AlarmReceiver alarmReceiver;


    public AlarmModule(ReactApplicationContext context) {
        super(context);

        reactContext = context;

        alarmReceiver = new AlarmReceiver();
        context.registerReceiver(alarmReceiver, new IntentFilter("LEVANTADOR_ALARM_INTENT"));
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
    public void set(String alarmId, int alarmTime) {       
        initAndSetAlarm(alarmId, alarmTime);
    }

    private void initAndSetAlarm(String alarmId, int alarmTime) {

        int sequentialAlarmId = syncAlarmWithSharedPreferences(alarmId, alarmTime);

        AlarmManager alarmManager = (AlarmManager) reactContext.getSystemService(Context.ALARM_SERVICE);

        Intent intent = new Intent("LEVANTADOR_ALARM_INTENT");
        intent.putExtra("alarmId", alarmId);

        PendingIntent pendingIntent = PendingIntent.getBroadcast(reactContext, sequentialAlarmId, intent, PendingIntent.FLAG_UPDATE_CURRENT);

        alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, alarmTime, 1000 * 60 * 60 * 24, pendingIntent);
    }

    private int syncAlarmWithSharedPreferences(String alarmId, int alarmTime) {
        SharedPreferences sharedpreferences = reactContext.getSharedPreferences("levantador-alarms", Context.MODE_PRIVATE);	
        SharedPreferences.Editor driver = sharedpreferences.edit();

        driver.putInt(alarmId, alarmTime).commit();

        int currentAlarmSequentialNumber = sharedpreferences.getInt("alarmSequentialId", 0);
        driver.putInt("alarmSequentialId", currentAlarmSequentialNumber + 1).commit();

        return currentAlarmSequentialNumber;
    }

    /**
        Even though the CLI didn't work, this code is copied from react-native-create-bridge/master/templates/java
        Thanks!
     */

    
}