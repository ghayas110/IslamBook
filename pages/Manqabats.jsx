import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import Cards from '../components/Card'
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import CardManqabat from '../components/CardManqabat'

const Manqabats = () => {
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
    <CardManqabat datasend={data?.manqabats}/>
    </View>
  )
}

export default Manqabats

const styles = StyleSheet.create({})