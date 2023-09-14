import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Productos from '../screens/Productos';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
          headerShown:false,
    }}
    >
        <Stack.Screen component={Home} name="home"/>
        <Stack.Screen component={ProductDetail} name= "productDetail" />
        <Stack.Screen component={Productos} name= "productos"/>
        
    </Stack.Navigator>
  );
};

export default RootNavigation

const styles = StyleSheet.create({})