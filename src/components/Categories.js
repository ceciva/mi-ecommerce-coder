import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {categories} from"../data/categories";
import CategoryItem from './CategoryItem';
import { colors } from '../theme/colors';
const Categories = () => {
  return (
    <View style= {styles.container}>
      <FlatList 
      data={categories}
      keyExtractor={key =>key}
      renderItem={({item}) => <CategoryItem item={item}/>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.violet,
        alignItems: "center",
        justifyContent:"center"
        

    },
    
});