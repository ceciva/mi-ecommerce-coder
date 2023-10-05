import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { colors  } from '../theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker'; 
import {usePutImageMutation}from "../servicios/ecApi";
import { useGetImageQuery } from '../servicios/ecApi';


const Profile = () => {

     const [putImage, result]= usePutImageMutation();

    const {data, isLoadin, error, isError, refetch} = useGetImageQuery();

    const defaultImage=
    "https://cdn3.vectorstock.com/i/1000x1000/90/07/avatars-default-photo-placeholder-vector-22419007.jpg" ;
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
          base64: true,
          
        });
        
           
        if (!result.canceled) {
            await putImage({
                image: `data:image/jpeg;base64, ${result.assets[0].base64}`,
            });
            refetch();
        }
      };
      
      const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Acceso a la cámara denegado");
          return;
        } else {
          const result = await ImagePicker.launchCameraAsync({
            base64: true,
          });
    
    
          if (!result.canceled) {
            await putImage({
              image: `data:image/jpeg;base64,${result.assets[0].base64}`,
            });
            refetch();
          }
        }
      };  


  return (
    <View>
        <Header title= "Mi Perfil"/>
    
        <View style= {styles.container}>
            <Image style= {styles.image}
            source={{uri: data? data.image: defaultImage 
            }}
            
            />
        </View>
        <View style={styles.iconsContainer}>
            <Pressable onPress={()=> openCamera()}>
                <FontAwesome name="camera" size={50} color= {colors.violet} />
            </Pressable>
            <Pressable onPress={()=> pickImage()}>
            <FontAwesome name="photo" size={50} color={colors.violet} />
            </Pressable>
            <Pressable onPress={()=> console.log("ver location..")}>
            <Ionicons name="location-sharp" size={50} color={colors.violet} />
            </Pressable>
        </View>
    </View>
  );
};

export default Profile

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginTop: 15,
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 30,
        
    },
    iconsContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:20
    }

})