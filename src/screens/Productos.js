import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import{products} from "../data/products"
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { Ionicons } from '@expo/vector-icons';
 
const Productos = ({ route, navigation}) => {
  const [productFiltered, setProductFiltered]= useState([]);
  const [text, setText]= useState(null);

  const {item} = route.params;
  
  useEffect(() => {
    const filterByCategory= products.filter((el)=> el.category ===item);
    setProductFiltered(filterByCategory);
    

    if (text){
      const titleProduct= products.filter((el)=> el.title.toLowerCase() === text.toLocaleLowerCase());
      setProductFiltered(titleProduct);
    }   

  }, [text, item]);
  
  return (
    <SafeAreaView>
      <Header title= {item}/>
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={30} color="#614BC3" />
      </Pressable>
      <Search text= {text} setText={setText}/>
      <FlatList
        data={productFiltered} 
        keyExtractor= {products.id}
        renderItem= {({item})=> <ProductItem navigation ={navigation} item={item}/>}
      />
   
    </SafeAreaView>
  )
}

export default Productos

const styles = StyleSheet.create({
  goBack:{
    position:"absolute",
    top: 27,
    left: 5,

},
})