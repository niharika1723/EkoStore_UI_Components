import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notification from './ui_components/Notification.js';
import { globalStyles } from '../EkoStore/styles/global.js';


export default function App() {
  return (
    <View >
      <Notification/>
    </View>
  );
}


