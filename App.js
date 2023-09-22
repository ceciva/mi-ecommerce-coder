
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import TabNav from './src/navigation/TabNav';

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
    <Provider>
      <NavigationContainer>
        <TabNav/>
      </NavigationContainer>
    </Provider>  
  );
}

const styles = StyleSheet.create({
  
  texto:{
    color: colors.turquesa,
    fontWeight: "700",
  },
  

});
