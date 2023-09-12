
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';

import { colors } from './src/theme/colors';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Productos from './src/screens/Productos';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded]= useFonts({
    josefinSlab: require("./assets/Fonts/JosefinSlab-Italic.ttf"),
    dancing: require("./assets/Fonts/DancingScript-Bold.ttf"),
  }); 
  
  if (!fontsLoaded){
    return;
  }
console.log(fontsLoaded) ; 
  return (
    <SafeAreaView>
      {/* <Home/> */}
      {/* <Search/> */}
      <Productos category="smartphones"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  texto:{
    color: colors.turquesa,
    fontWeight: "700",
  },
  

});
