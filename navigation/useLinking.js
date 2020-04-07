import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: ['/'],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        },
      },
      NewAlarm: {
        path: 'NewAlarm'
      },
      ExistingAlarms: {
        path: 'ExistingAlarms'
      },
      EditAlarm: {
        path: 'EditAlarm'
      },
    },
  });
}