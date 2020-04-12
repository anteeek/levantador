package com.levantador.alarmbridge;

import android.Manifest;
import android.app.Service;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.Vibrator;
import android.os.PowerManager;

import com.facebook.common.util.UriUtil;

import java.io.IOException;
import java.io.*; 
import android.os.Bundle;
import android.view.WindowManager;

import android.content.SharedPreferences;

import com.levantador.MainApplication;

public class AlarmService extends Service {

    private static AlarmService serviceInstance = null;
    

    @Override 
    public void onCreate() {
        AlarmService.serviceInstance = this;
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    public static AlarmService getInstance() {
        return serviceInstance;
    }

    public void startAlarm() {

        PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
        PowerManager.WakeLock mWakeLock = pm.newWakeLock(PowerManager.SCREEN_BRIGHT_WAKE_LOCK |
                PowerManager.ACQUIRE_CAUSES_WAKEUP | PowerManager.ON_AFTER_RELEASE, "MainActivity");
        mWakeLock.acquire(5000);

        Intent i = new Intent("MainActivity");

        i.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP |
                Intent.FLAG_ACTIVITY_NEW_TASK |
                Intent.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS);
        startActivity(i);
    }
}