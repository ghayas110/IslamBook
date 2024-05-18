import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'
import BannerTrack from '../components/BannerTrack'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ManqabatDetail = ({route}) => {

    const [lan, setLan] = useState()
    useEffect(() => {
      async function checkLanStatus() {
     
  
        const value = await AsyncStorage.getItem("data");
    setLan(value)

      }
    
      checkLanStatus()
    }, [])
    return (
      <>
      <Header/>
      <BannerTrack title={lan=='hi'? route?.params?.manqabat_name_urdu:route?.params?.manqabat_name_eng}  
      type={lan=='hi'? route.params?.writer_name_urdu:route.params?.writer_name_eng}/>
      <ScrollView style={styles.container}>
  
        <Text style={styles.heading}>{lan=='hi'? route.params?.manqabat_verses_urdu:route.params?.manqabat_verses_eng}</Text>
      </ScrollView>
      </>
    )
  }
  
  export default ManqabatDetail
  
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