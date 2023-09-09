import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { colors } from '../theme/colors';

const CategoryItem = ({item}) => {
  return (
    <View >
      <Text style= {styles.categoryText}>{item}</Text>
    </View>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
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