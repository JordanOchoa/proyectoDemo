import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import './fixisuue';

import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';
import Screen3 from './src/screens/screen3';
import Login from './src/screens/Login';
import ImageScreen from './src/screens/ImageScreen';
import ProfileScreen from './src/screens/Profile';


var firebaseConfig = {
    apiKey: "AIzaSyC6rwOvFFQY7ms_uvyNe-AM6z2-6iDjJ_4",
    authDomain: "auth-9138c.firebaseapp.com",
    databaseURL: "https://auth-9138c.firebaseio.com",
    projectId: "auth-9138c",
    storageBucket: "",
    messagingSenderId: "403663083717",
    appId: "1:403663083717:web:ac5ebb68cb3633b3"
  };

firebase.initializeApp(firebaseConfig);



const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Singup: Login,
    Singin: Screen1,
  }),
  mainFlow: createBottomTabNavigator({
    ProfileFlow: createStackNavigator({
      ProfileScreen: ProfileScreen,
      EditProfileScreen: Screen2,
    }),
    EventFlow: createStackNavigator({
      EventScreen: Screen3,
      DetailEventScreen: ImageScreen,
    })
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      },
    })
});






export default createAppContainer(navigator);
