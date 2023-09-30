import { StyleSheet, Text, View, TextInput , Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useState } from 'react';
import { firebase_auth } from '../firebase/firebase_auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register = ({navigation}) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleRegister= async() =>{
        
        try{

        const response= await createUserWithEmailAndPassword(firebase_auth, email, password) ;
        
               
        navigation.navigate("login");


        }
        catch (e){
        console.log("error en el registro", e); 

        }
    }

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style= {styles.email}
        placeholder= "email adress"
        onChangeText={newText=> setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style= {styles.email}
        placeholder= "password"
        onChangeText={newPassword=> setPassword(newPassword)}
        defaultValue={password}
      />

      <Pressable onPress={()=> handleRegister()}>
        <Text style={styles.registrarse}>
            Registrarse
        </Text>
       </Pressable> 

      <Pressable onPress={()=>navigation.navigate("login")} >
        <Text style={styles.yaTienes}>
            Ya tienes cuenta? Iniciar sesión
            
        </Text> 
       </Pressable>    

      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightAqua,
        flex:1,
        justifyContent: "center",
        alignItems: "center",

    },
    title:{
        fontSize: 25,
        fontFamily: "dancing",
        color: colors.violet,
        marginBottom:10,

    },
    email:{
        width: "85%",
        height: 50,
        borderColor: colors.violet,
        borderRadius: 30,
        borderWidth: 3,
        paddingHorizontal:20,
        marginTop:10,
        fontSize:20,
        color: colors.violet,
        fontFamily: "dancing",


    },
    yaTienes:{ 
       color: colors.violet,
       fontFamily: "dancing",
       marginTop: 20,
       fontSize:15,

    },
    registrarse:{
        width: "50%",
        height: 50,
        borderColor: colors.violet,
        borderRadius: 30,
        borderWidth: 3,
        paddingHorizontal:20,
        marginTop:30,
        fontSize:20,
        color: colors.violet,
        fontFamily: "dancing",

    }
})