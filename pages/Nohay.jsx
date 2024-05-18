import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import Cards from '../components/Card'
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'

const Nohay = () => {
  const [data, setdata] = useState()
  const { t,i18n } = useTranslation();


  const handleSubmit = async () => {
    try {
      await fetch(`https://bartenderbackend.bazazi.co/noha/GetAllNohas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         
        },
      })
        .then(response => response.json())
        .then(dataa => {
       console.log(dataa)
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
    <Cards datasend={data?.Nohas}/>
    </View>
  )
}

export default Nohay

const styles = StyleSheet.create({})