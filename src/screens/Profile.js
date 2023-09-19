import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors  } from '../theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View>
        <Header title= "Mi Perfil"/>
        <View style= {styles.container}>
            <Image style= {styles.image}
            source={{uri: "https://cdn3.vectorstock.com/i/1000x1000/90/07/avatars-default-photo-placeholder-vector-22419007.jpg" 
            }}
            />
        </View>
        <View style={styles.iconsContainer}>
            <Pressable onPress={()=> console.log("usar cámara..")}>
                <FontAwesome name="camera" size={50} color= {colors.violet} />
            </Pressable>
            <Pressable onPress={()=> console.log("ver galeria..")}>
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