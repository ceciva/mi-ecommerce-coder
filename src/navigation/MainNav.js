import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const MainNav = () => {

const user = useSelector((state)=> state.authSlice.user) ;   
  return (

    <NavigationContainer>
      <TabNav/>
    {/* {user ? <TabNav/>:<AuthNav/>} */}

    </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})