import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import {AntDesign} from "@expo/vector-icons";
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const ProductDetail = ({route, navigation}) => {
    const {item} = route.params;

    const productSelected = useSelector(
        (state)=>state.homeSlice.productSelected
    );

    console.log("selected:", productSelected)
  return (
    <SafeAreaView>
        <Header title= "Detalles del producto"/>
        <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color="#614BC3" />
        </Pressable>
        <View style={styles.imageContainer}>
            <Image
            resizeMode="cover"
            style={styles.image}
            source={{
                uri: item.images[0],
            }}
            />

            <View style={styles.descriptionContainer}>
                <Text style={styles.title}> {item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>$ {item.price}</Text>

                <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={21} color="black"/>
                    <Text style={styles.rating}>Rating: {item.rating}</Text>
                </View>
            </View>    
        </View>
        <Pressable style={styles.button} onPress={()=>console.log("Hola funciona")}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
        </Pressable>    
           
        
      
    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    image:{
        height: 250,
        width:300,
    }, 

    imageContainer:{
        alignItems:"center",
    },
    goBack:{
        position:"absolute",
        top: 27,
        left: 5,
    
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