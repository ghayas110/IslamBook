import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import Icons from '../components/Icons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
        }}>
     <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            
            <Icons.AntDesign name="home" color={color} size={size}/>
            ),
          }}/>
      <Tab.Screen name="Details" component={DetailScreen} options={{
          tabBarIcon: ({ color, size }) => (
            
            <Icons.MaterialCommunityIcons name="account-details" color={color} size={size}/>
            ),
          }}/>

    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})