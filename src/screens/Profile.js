import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { colors  } from '../theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'; 
import * as Location from "expo-location";
import {usePutImageMutation}from "../servicios/ecApi";
import { useGetImageQuery } from '../servicios/ecApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearUser } from '../redux/slices/authSlice';

const Profile = ({navigation}) => {
    const dispatch= useDispatch()
    
    const [putImage, result]= usePutImageMutation();
    const [location, setLocation]= useState();
    const [errorMsg, setErrorMsg] = useState(null);
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

      const getCoords= async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        ;
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          console.log(errorMsg)
          return;
        };
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        // console.log("esta es la location:", location)
        navigation.navigate("mapaLoc", {location });
      };

      const handleLogOut= async()=>{
        try {
          
          dispatch(clearUser()) ;
          await AsyncStorage.removeItem("userEmail");

        } catch (error) {
          
        }
      };

      const onLogout= () => 
        Alert.alert ('Cerrar sesión', 'Está seguro que desea cerrar la sesión?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => handleLogOut()},
          ]);

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

        {/* abre cámara */}
            
              <Pressable onPress={()=> openCamera()}>
                  <FontAwesome name="camera" size={50} color= {colors.violet} />
                  <Text style={styles.iconsText}>Camera</Text>
              </Pressable>

        {/*abre galería  */}

              <Pressable onPress={()=> pickImage()}>
              <FontAwesome name="photo" size={50} color={colors.violet} />
              <Text style={styles.iconsText}>Galería</Text>
              </Pressable>

        {/* location */}

              <Pressable onPress={()=> getCoords()}>
              <Ionicons name="location-sharp" size={50} color={colors.violet} />
              <Text style={styles.iconsText}>Mapa</Text>
              </Pressable>
          </View>

          {/*logout  */}
          
          <View style={styles.logoutContainer}>
            <Pressable onPress={()=> onLogout()}>
              <Ionicons name="person-remove-sharp" size={50} color={colors.violet} />
              <Text style={styles.iconsText}>Logout</Text>
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
    },
    logoutContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop:100,
    },
    iconsText:{
      fontFamily: "dancing",
      fontSize: 15,
      color: colors.turquesa,
      
    }

})