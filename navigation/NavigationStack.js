import React, { useEffect } from 'react';
import {Platform, StatusBar, View, StyleSheet} from "react-native";

import { SplashScreen } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Provider as PaperProvider
} from 'react-native-paper';

import {DarkTheme, Theme} from "../constants";

import BottomTabNavigator from '../navigation/BottomTabNavigator';
import useLinking from '../navigation/useLinking';
import TopBar from './TopBar';

import { NewAlarmScreen, EditAlarmScreen } from "../screens";

const Stack = createStackNavigator();

export default (props) => {

  const { getInitialState } = useLinking(containerRef);

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();


  useEffect(() => {
      async function loadResourcesAndDataAsync() {
        try {
          SplashScreen.preventAutoHide();
          
          const initialState = await getInitialState();
          setInitialNavigationState(initialState);

        } catch (e) {
          console.warn(e);
        } finally {
          setLoadingComplete(true);
          SplashScreen.hide();
        }
      }
  
      loadResourcesAndDataAsync();
    }, []);

    const [isDarkModeOn, toggleDarkMode] = React.useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
      } else {
          return (
            <PaperProvider theme={isDarkModeOn ? DarkTheme : Theme}>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <NavigationContainer 
                  ref={containerRef} 
                  initialState={initialNavigationState}
                   theme={isDarkModeOn ? DarkTheme : Theme}
                >
                  <Stack.Navigator
                    headerMode="screen"
                    screenOptions={{
                      header: props => <TopBar {...props} isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />
                    }}
                  >
                    <Stack.Screen name="Root" component={BottomTabNavigator} />
                    <Stack.Screen name="NewAlarm" component={NewAlarmScreen} />
                    <Stack.Screen name="EditAlarm" component={EditAlarmScreen} />
                  </Stack.Navigator>
                </NavigationContainer>
              </View>
            </PaperProvider>
          )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
