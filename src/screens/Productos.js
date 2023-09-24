import { FlatList, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'

import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
 
const Productos = ({ route, navigation}) => {
  const [productFiltered, setProductFiltered]= useState([]);
  const [text, setText]= useState(null);

  const {item} = route.params;
  
  const products = useSelector((state) => state.homeSlice.allProducts);

  const productsFilteredByCategory = useSelector(
    (state) => state.homeSlice.productsFilteredByCategory
  );
  
  useEffect(() => {
    setProductFiltered(productsFilteredByCategory);
    

    if (text){
      const titleProduct= products.filter((el)=> el.title.toLowerCase() === text.toLocaleLowerCase());
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
        data={productFiltered} 
        keyExtractor= {products.id}
        renderItem= {({item})=> 
          <ProductItem navigation ={navigation} item={item}/>}
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