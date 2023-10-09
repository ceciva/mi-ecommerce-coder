import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapaLoc from '../screens/MapaLoc';
import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen component={Profile} name="profile" />
      <Stack.Screen component={MapaLoc} name="mapaLoc" />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({})