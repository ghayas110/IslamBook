import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopSection = () => {
    const { t,i18n } = useTranslation();
const [name, setName] = useState()
 
    useEffect(() => {
      async function checkLanStatus() {
         const names = await AsyncStorage.getItem("name");
      const value = await AsyncStorage.getItem("data");
       setName(names)
      i18n.changeLanguage(value)
      }
      checkLanStatus()
    }, [])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18}}>{t("Assalamualaikum")}</Text>
       <Text style={{fontSize:18,fontWeight:'900'}}>{name}</Text>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({
    container:{
        display:'flex',
       flexDirection:'column',

        paddingHorizontal:20,
        paddingVertical:10
    }
})