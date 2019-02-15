import React, { Component } from 'react';
import { Platform, Dimensions, Text, View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83
};

const Drawer = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(Drawer);
