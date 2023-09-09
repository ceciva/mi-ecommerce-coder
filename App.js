
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';

import { colors } from './src/theme/colors';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Productos from './src/screens/Productos';
export default function App() {
  return (
    <SafeAreaView>
      {/* <Home/>
      <Search/> */}
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
