import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { colors } from '../theme/colors';


const Categories = ({navigation}) => {
  return <View style={styles.container}></View>;
    
  
}

export default Categories

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: colors.violet,
        alignItems: "center",
        justifyContent:"center"
        

    },
    
});