// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import SplashScreen from './pages/Splash/SplashScreen';
import Language from './pages/Splash/Language';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;