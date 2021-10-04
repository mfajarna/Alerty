import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, GetStarted, Login, Register, Splash} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Grafik from '../pages/Grafik';
import About from '../pages/About';
import { CustomButtomNavigator } from '../components';
import TestNotif from '../pages/TesNotif';
import DetailPerangkat from '../pages/DetailPerangkat';
import Chart from '../pages/Chart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomButtomNavigator {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Maps" component={Grafik} />
      <Tab.Screen name="About Us" component={About} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Grafik"
        component={Grafik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TestNotif"
        component={TestNotif}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPerangkat"
        component={DetailPerangkat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chart"
        component={Chart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
