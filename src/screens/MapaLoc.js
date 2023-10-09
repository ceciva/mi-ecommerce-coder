import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';


const MapaLoc = ({navigation}) => {
  const {location} = route.params;

  console.log (location)
  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
      <Text>MapaLoc</Text>
      <Text>MapaLoc</Text>
      <Text>MapaLoc</Text>
      <Text>MapaLoc</Text>
    </View>
  )
}

export default MapaLoc

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})