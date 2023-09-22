import { StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'

import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryItem from '../components/CategoryItem';
import { colors } from '../theme/colors';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="Categorías" navigation= {navigation} />
      <View style= {styles.container}>
        <FlatList 
        data={categories}
        keyExtractor={key =>key}
        renderItem={({item}) => <CategoryItem navigation={navigation} item={item}/>}
        />
      
      </View>
    </SafeAreaView>
  );
};

export default Home

const styles = StyleSheet.create({
  container:{
        
    backgroundColor: colors.violet,
    alignItems: "center",
    justifyContent:"center"
    

},
})