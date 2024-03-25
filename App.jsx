// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import SplashScreen from './pages/Splash/SplashScreen';
import Language from './pages/Splash/Language';
import './i18n/i18n.config';
import TabNavigation from './navigation/TabNavigation';
import MainNavigation from './navigation/MainNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <MainNavigation/>
  );
}

export default App;