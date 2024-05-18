import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Icons from './Icons'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Header = () => {
    const navigation = useNavigation()
    const { t,i18n } = useTranslation();

 
    useEffect(() => {
      async function checkLanStatus() {
     
      const value = await AsyncStorage.getItem("data");
      i18n.changeLanguage(value)
      }
      checkLanStatus()
    }, [])
  return (
    <View style={styles.container}>
        <View style={styles.home}>
<TouchableOpacity onPress={()=>navigation.toggleDrawer()}>

        <Icons.MaterialCommunityIcons name="menu" size={27}/>
</TouchableOpacity>
      <Text style={styles.heading}>{t("Dasta Imamia")}</Text>
        </View>
      <View>
      <Icons.AntDesign name="search1" size={20}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:10
    },
    home:{
        flexDirection:'row',
        alignItems:'center',

        justifyContent:'space-around',
 
    },
    heading:{
        fontSize:17,
        paddingHorizontal:10,
        fontWeight:'bold',
        color:'#5A338C'
    }
})