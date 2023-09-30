import { StyleSheet, Text, View, TextInput , Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useState } from 'react';
import { firebase_auth } from '../firebase/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slices/authSlice';


const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleLogin= async()=>{
        try{

          const response = await signInWithEmailAndPassword (firebase_auth, email, password);  
          
          dispatch (setUser(response.user.email));
          dispatch (setIdToken(response._tokenResponse.idToken));

           


        }
        catch (e){
           console.log ("error en login", e); 

        }
    }

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style= {styles.email}
        placeholder= "email"
        onChangeText={newText=> setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style= {styles.email}
        placeholder= "password"
        onChangeText={newPassword=> setPassword(newPassword)}
        defaultValue={password}
      />

      <Pressable onPress={()=> handleLogin()}>
        <Text style={styles.registrarse}>
            Iniciar sesión
        </Text>
      </Pressable>  
      <Pressable onPress={()=>navigation.navigate("register")}>
        <Text style={styles.yaTienes}>
            No tienes cuenta? Registrarse
        </Text>    
       </Pressable> 
      
    </View>
  )
}

export default Login

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
        width: "60%",
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