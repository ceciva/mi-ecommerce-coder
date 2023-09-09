import { Image, ImageComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      
      <Image style={styles.image}
        height={70}
        width={70}
        source={{uri:item.images[0] }}
        resizeMode= "cover"
      />
    </View>
  );
};

export default ProductItem

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical: 10,
        borderColor: colors.violet,
        borderRadius: 20,
        borderWidth: 2,
        height: 100,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },  
    text:{
        fontSize: 10,
        fontWeight: "600",
        marginLeft:20,
    },
    image:{
        marginRight: 10,
    }
    
});