import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { products } from '../data/products';
import {AntDesign} from "@expo/vector-icons";
import { colors } from '../theme/colors';

const ProductDetail = () => {
    const initialProd= products[0];
  return (
    <View>
        <Header title= "Detalles del producto"/>
        <View style={styles.imageContainer}>
            <Image
            resizeMode="cover"
            style={styles.image}
            source={{
                uri: initialProd.images[2],
            }}
            />

            <View style={styles.descriptionContainer}>
                <Text style={styles.title}> {initialProd.title}</Text>
                <Text style={styles.description}>{initialProd.description}</Text>
                <Text style={styles.price}>$ {initialProd.price}</Text>

                <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={21} color="black"/>
                    <Text style={styles.rating}>Rating: {initialProd.rating}</Text>
                </View>
            </View>    
        </View>
        <Pressable style={styles.button} onPress={()=>console.log("Hola funciona")}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
        </Pressable>    
           
        
      
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    image:{
        height: 300,
        width:360,
    }, 

    imageContainer:{
        alignItems:"center",
    },
    descriptionContainer:{
        marginVertical:10,
        marginTop: 8,
    },
    title:{
        fontFamily:"dancing",
        fontSize:25,
    },
    description:{
        fontSize: 18,
    },
    price:{
        marginTop: 5,
        fontSize: 15,
    },
    rating:{
        fontSize: 15,
        marginLeft: 5

    },
    ratingContainer:{
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    button:{
        marginVertical: 5,
        alignItems: "center",
        justifyContent:"center",
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 10,
        backgroundColor: colors.lightAqua,

    },
    buttonText:{
        fontSize:20,
        fontFamily: "dancing",
        
        color: colors.violet, 
    }


})