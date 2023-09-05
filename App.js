import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { colors } from './src/theme/colors';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
export default function App() {
  return (
    <SafeAreaView>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  texto:{
    color: colors.turquesa,
    fontWeight: "700",
  },
  

});
