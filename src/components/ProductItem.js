import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setProductSelected } from '../redux/slices/homeSlice';

const ProductItem = ({item, navigation}) => {
  const{height, width} = useWindowDimensions();
  const dispatch = useDispatch();

  const onHandleProductDetail =()=>{
    dispatch(setProductSelected(item));
    navigation.navigate("productDetail");
  };
  
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>onHandleProductDetail() }>
        <Text style= {width<300 ? styles.textMin : styles.text}>{item.title}</Text>
      </Pressable>  
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
        fontFamily: "dancing",
        fontSize: 20,
        fontWeight: "600",
        marginLeft:20,
    },
    textMin:{
      fontFamily: "dancing",
        fontSize: 10,
        fontWeight: "600",
        marginLeft:20,

    },
    image:{
        marginRight: 10,
    }
    
});