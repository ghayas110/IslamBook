// ./navigation/StackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import DetailScreen from "../pages/DetailScreen";
import Noha from "../pages/Noha";
import ManqabatDetail from "../pages/ManqabatDetail";
import SozDetail from "../pages/SozDetail";
import Manqabat from "../pages/Manqabat";
import Soz from "../pages/Soz";



const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name="Homes" initialParams={{prop:true}} component={HomeScreen} screenOptions={{
        headerShown: false
        }} />
        <Stack.Screen name="Details" component={DetailScreen} />
 
    </Stack.Navigator>
  );
};
const NohaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name="Nohay" initialParams={{prop:true}} component={Noha} screenOptions={{
        headerShown: false
        }} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="MDetails" component={ManqabatDetail} />
      <Stack.Screen name="SDetails" component={SozDetail} />
    </Stack.Navigator>
  );
};
const ManqabatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name="Manqabat" initialParams={{prop:true}} component={Manqabat} screenOptions={{
        headerShown: false
        }} />
      <Stack.Screen name="MDetails" component={ManqabatDetail} />
 
    </Stack.Navigator>
  );
};
const SozStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name="Soz" initialParams={{prop:true}} component={Soz} screenOptions={{
        headerShown: false
        }} />
      <Stack.Screen name="SDetails" component={SozDetail} />
 
    </Stack.Navigator>
  );
};

export { HomeStackNavigator,NohaStackNavigator,ManqabatStackNavigator,SozStackNavigator};