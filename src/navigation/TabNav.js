import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../theme/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './RootNavigation';
import Profile from '../screens/Profile';



const Tab= createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, title:""}}>
        <Tab.Screen 
            name="root"
            component={RootNavigation}
            options={{
                tabBarIcon:({focused})=>(
                    <FontAwesome5 
                        name="home" 
                        size={focused? 30:24} 
                        color={focused? colors.turquesa:colors.violet} /> 
                )
            }}/>
        <Tab.Screen 
            name="profile" 
            component={Profile}
            options={{
                tabBarIcon:({focused})=>(
                    <Ionicons 
                        name="md-person-sharp" 
                        size={focused? 30 : 24} 
                        color={focused? colors.turquesa:colors.violet} />
                )
            }}/>
    </Tab.Navigator>
  );
};

export default TabNav

const styles = StyleSheet.create({})