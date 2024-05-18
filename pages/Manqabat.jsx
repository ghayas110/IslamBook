import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import Cards from '../components/Card'
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import CardManqabat from '../components/CardManqabat'

const Manqabat = () => {
  const [data, setdata] = useState()
  const { t,i18n } = useTranslation();


  const handleSubmit = async () => {
    try {
      await fetch(`https://bartenderbackend.bazazi.co/manqabat/GetAllManqabats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         
        },
      })
        .then(response => response.json())
        .then(dataa => {
 
       setdata(dataa)
        });
    } catch (error) {
      // Alert.alert('An error occurred while processing your request.');
    }

  }
  useEffect(() => {
    async function checkLanStatus() {
   
    const value = await AsyncStorage.getItem("data");
    i18n.changeLanguage(value)
    }
    handleSubmit()
    checkLanStatus()
  }, [])

  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.heading}>{t('Manqabat')}</Text>
    <CardManqabat datasend={data?.manqabats}/>
      </View>
    </View>
  )
}

export default Manqabat

const styles = StyleSheet.create({
  container:{
    display:'flex',
   flexDirection:'column',

    paddingHorizontal:20,
    paddingVertical:10
},
heading:{
  fontSize:27,
  paddingHorizontal:10,
  fontWeight:'bold',
  color:'#5A338C'
}
})