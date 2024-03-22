import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
    const navigation =useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Language')
      }, 1000); // Navigate to Home screen after 10 seconds
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('../../images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'orange'
      },
})