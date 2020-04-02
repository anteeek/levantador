import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Navigation from "../constants/Navigation";
import TopBar from "./TopBar";
import {AboutScreen , HomeScreen} from "../screens";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
      <Tab.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          header: TopBar
        }}
      >
        <Tab.Screen 
           name="Home"
           component={HomeScreen}
           activeColor="black"
           options={{tabBarIcon: "alarm"}}
         />
        <Tab.Screen 
           name="About"
           component={AboutScreen} 
           options={{tabBarIcon: "unfold-more-vertical"}} 
         />
      </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? Navigation.initialRouteName;

  return Navigation.headerTitles[routeName];
}