package com.levantador.alarmbridge;

import android.app.AlertDialog;
import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.Toast;
import android.os.PowerManager;

import com.facebook.common.util.UriUtil;

import java.io.IOException;
import java.io.*; 
import android.os.Bundle;
import android.view.WindowManager;

import static android.content.Context.NOTIFICATION_SERVICE;

import com.levantador.MainActivity;
import com.levantador.alarmbridge.AlarmModule;
import com.levantador.alarmbridge.AlarmService;

public class AlarmReceiver extends BroadcastReceiver {


    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context, "CHOO CHOO alarm went off", 10000).show();

        AlarmService s = AlarmService.getInstance();
        s.startAlarm();
    }

}