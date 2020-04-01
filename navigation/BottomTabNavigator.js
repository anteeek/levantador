import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
        <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon: "alarm"}} />
        <Tab.Screen name="about" component={AboutScreen} options={{tabBarIcon: "unfold-more-vertical"}} />
      </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? "home";

  switch (routeName) {
    case 'home':
      return 'Main functionality';
    case 'about':
      return 'Learn more';
  }
}