import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { Feather } from '@expo/vector-icons';

const Search = ({text, setText})=>{

const clearText=()=>{
   setText(null); 
};    
  return (
    <View style= {styles.container}>
       <TextInput 
            style= {styles.input} 
            onChangeText={(value)=>setText(value)}
            value={text}
            placeholder= "Busca un producto"
        />   

            <Pressable onPress={() => clearText()}>
                <Feather name="x-circle" size={30} color= "#614BC3"/>
            </Pressable>   
      
    </View>
  
  );
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,

    },
    searchContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 0,
    },
    input:{
        fontFamily: "dancing",
        width: "88%",
        fontSize: 20,
        margin: 2,
        color: colors.violet,
        padding: 5,
        borderColor: colors.lightAqua,
        borderWidth: 2,
        borderRadius: 20,
        textAlign: "center"

    },

});