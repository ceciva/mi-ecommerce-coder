import { StyleSheet } from 'react-native'
import React from 'react'
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainNav = () => {
  const [checkedUser, setCheckedUser]= useState(null)

  const user = useSelector((state)=> state.authSlice.user) ; 

  useEffect(()=>{
    const checkUser = async()=>{
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        userEmail? setCheckedUser(userEmail) : setCheckedUser(user)
         
        
      } catch (error) {
        console.log(error)
        
      }
    };
    checkUser()
  },[user]) ; 
  return (

    <NavigationContainer>
      
    {checkedUser ? <TabNav/>:<AuthNav/>}

    </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})