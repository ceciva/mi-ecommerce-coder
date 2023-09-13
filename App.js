
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';

import { colors } from './src/theme/colors';

import Home from './src/screens/Home';
import Productos from './src/screens/Productos';

import { useFonts } from 'expo-font';
import ProductDetail from './src/screens/ProductDetail';

export default function App() {
  const [fontsLoaded]= useFonts({
    josefinSlab: require("./assets/Fonts/JosefinSlab-Bold.ttf"),
    dancing: require("./assets/Fonts/DancingScript-Bold.ttf"),
  }); 
  
  if (!fontsLoaded){
    return;
  }
console.log(fontsLoaded) ; 
  return (
    <SafeAreaView>
      {/* <Home/> */}
      {/* <Productos category="smartphones"/> */}
      <ProductDetail/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  texto:{
    color: colors.turquesa,
    fontWeight: "700",
  },
  

});
