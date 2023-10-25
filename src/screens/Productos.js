import { FlatList, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'

import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

import { useGetProductsQuery} from '../servicios/ecApi'; 


const Productos = ({ route, navigation}) => {
  const [productFiltered, setProductFiltered]= useState([]);
  const [text, setText]= useState(null);

  const {item} = route.params;
  
  //trae productos desde homeSlice
  // const products = useSelector((state) => state.homeSlice.allProducts);
  // console.log( "productos desde slice:", products);
  
  //trae productos desde api

  const {data, error, isLoading} = useGetProductsQuery(item);
  

  // const productsFilteredByCategory = useSelector(
  //   (state) => state.homeSlice.productsFilteredByCategory
  // );
  
  useEffect(() => {
    setProductFiltered(productFiltered);
    

    if (text){
      const titleProduct= data.filter((el)=> el.title.toLowerCase() === text.toLocaleLowerCase());
      console.log(titleProduct);
      setProductFiltered(titleProduct);
    }   

  }, [text, item]);
  
  return (
    <SafeAreaView>
      <Header title= {item} navigation={navigation}/>
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={30} color="#614BC3" />
      </Pressable>
      <Search text= {text} setText={setText}/>
      <FlatList
        data={data} 
        keyExtractor= {item => item.id }
        renderItem= {({item})=> 
          <ProductItem navigation ={navigation} item={item}/>}
      />
   
    </SafeAreaView>
  )
}

export default Productos;

const styles = StyleSheet.create({
  goBack:{
    position:"absolute",
    top: 27,
    left: 5,

},
})