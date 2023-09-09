import { FlatList, Image, StyleSheet, Text, View, textInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import{products} from "../data/products"
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'

const Productos = ({category}) => {
  const [productFiltered, setProductFiltered]= useState([]);
  const [text, setText]= useState("");

  console.log("TEXTO", text);
  console.log("CATEGORY", productFiltered)
  

  useEffect(() => {
    const filterByCategory= products.filter((el)=> el.category ===category);
    setProductFiltered(filterByCategory);
    

    if (text){
      const titleProduct= products.filter((el)=> el.title.toLowerCase() === text.toLocaleLowerCase());
      setProductFiltered(titleProduct);
    }   

  }, [text, category]);
  
  return (
    <View>
      <Header title="Productos"/>
      <Search text= {text} setText={setText}/>
      <FlatList
        data={productFiltered} 
        keyExtractor= {products.id}
        renderItem= {({item})=> <ProductItem item={item}/>}
      />
   
    </View>
  )
}

export default Productos

const styles = StyleSheet.create({})