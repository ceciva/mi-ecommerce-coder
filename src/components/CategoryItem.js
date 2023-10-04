import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react';
import { colors } from '../theme/colors';
import { setCategory } from '../redux/slices/homeSlice';
import { useDispatch } from 'react-redux';


const CategoryItem = ({item, navigation}) => {
  const dispatch = useDispatch();

  const onHandleItem=()=>{
    dispatch(setCategory(item));
    navigation.navigate("productos", {item:item });
  }
  
  return (
    <Pressable onPress={() => onHandleItem()}>
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