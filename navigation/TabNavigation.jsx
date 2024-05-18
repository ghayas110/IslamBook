import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import Icons from '../components/Icons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useTranslation } from 'react-i18next';
import Noha from '../pages/Noha';
import Soz from '../pages/Soz';
import Manqabat from '../pages/Manqabat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeStackNavigator, ManqabatStackNavigator, NohaStackNavigator, SozStackNavigator } from './StackNavigator';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    const { t,i18n } = useTranslation();
    useEffect(() => {
        async function checkLanStatus() {
       
        const value = await AsyncStorage.getItem("data");
        i18n.changeLanguage(value)
        }
        checkLanStatus()
      }, [])
      
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
        }}>
     <Tab.Screen name="Home" component={HomeStackNavigator} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={!focused ? require('../images/Icon.png') : require('../images/Icon-2.png')} style={{ width: 35, height: 30, objectFit: 'contain' }} />
         
            ),
            tabBarLabel: ({ color, size, focused }) => (
<Text style={{fontSize:12, color:focused?"#5A338C":"#8789A3" }}>Home</Text>           
              ),
          }}/>
      <Tab.Screen name="Noha" component={NohaStackNavigator} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={!focused ? require('../images/noha.png') : require('../images/nohafill.png')} style={{ width: 25, height: 20, objectFit: 'contain' }} />
         
            ),
            tabBarLabel: ({ color, size, focused }) => (
<Text style={{fontSize:14, color:focused?"#5A338C":"#8789A3" }}>{t('Noha')}</Text>           
              ),
          }}/>
    <Tab.Screen name="Soz" component={SozStackNavigator} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={!focused ? require('../images/soz.png') : require('../images/sozfill.png')} style={{ width: 25, height: 20, objectFit: 'contain' }} />
         
            ),
            tabBarLabel: ({ color, size, focused }) => (
<Text style={{fontSize:14, color:focused?"#5A338C":"#8789A3" }}>{t('Soz')}</Text>           
              ),
          }}/>
              <Tab.Screen name="Manqabat" component={ManqabatStackNavigator} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={!focused ? require('../images/manqabat.png') : require('../images/manqabatfill.png')} style={{ width: 25, height: 20, objectFit: 'contain' }} />
         
            ),
            tabBarLabel: ({ color, size, focused }) => (
<Text style={{fontSize:14, color:focused?"#5A338C":"#8789A3" }}>{t('Manqabat')}</Text>           
              ),
          }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})