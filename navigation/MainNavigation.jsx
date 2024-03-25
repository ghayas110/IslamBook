import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../pages/Feed';
import Article from '../pages/Article';
import TabNavigation from './TabNavigation';
import SplashScreen from '../pages/Splash/SplashScreen';
import Language from '../pages/Splash/Language';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainNavigation = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const Drawer = createDrawerNavigator();

    const Stack = createNativeStackNavigator();
    useEffect(() => {
      async function checkLoginStatus() {
     
        const value = await AsyncStorage.getItem("data");
        console.log(value,"hello value")
        if (value !== null) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }
  
      checkLoginStatus();
    }, []);
  
  return (
    <NavigationContainer>
    {isLoggedIn?

            <Drawer.Navigator screenOptions={{
              headerShown: false
              }}>
     <Drawer.Screen name="Homes" component={TabNavigation} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  :
  <Stack.Navigator screenOptions={{
    headerShown: false
    }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Language" >
      {(props) => <Language {...props} onLogin={() => setIsLoggedIn(true)}/>}
      </Stack.Screen>
    </Stack.Navigator>
  }
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})