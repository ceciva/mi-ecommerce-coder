import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react';
import { colors } from '../theme/colors';

const CategoryItem = ({item, navigation}) => {
  
  return (
    <Pressable onPress={() => navigation.navigate("productos", {item:item })}>
      <Text style= {styles.categoryText}>{item}</Text>
    </Pressable>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
       fontFamily: "dancing",
       fontSize: 20,
       margin: 2,
       color: colors.white,
       padding: 5,
       borderColor: colors.lightAqua,
       borderWidth: 2,
       borderRadius: 20,
       textAlign: "center"

    },
    

    
    

    
})