import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Header = ({title}) => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>{title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 75,
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: colors.lightAqua

  },
  text:{
    fontFamily: "dancing",
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "600",
    color: colors.violet,
  },
});

export default Header