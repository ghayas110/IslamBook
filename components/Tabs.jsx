import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import Cards from '../components/Card'
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'

const Tabs = () => {
  const { t,i18n } = useTranslation();
  const data = [
    { id: 1, title: 'Salam Ya Hussain', type: 'Nadeem Sarwar', verses: "Urdu", qoute:"سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں ہم کیا ہیں، ہم کہاں ہیں، کہاں جاتے ہیں ہم اپنی راہوں میں کیا بھٹکتے ہیں آئیں کچھ راہوں میں چلیں گے، مشکل کا سامنا کریں گے شمشیر کی لڑائیوں میں، جانوں کا دھونا کریں گے آپ کی بندگی کا ہی جو سمجھتے ہیں آسرا جب بھی زمین پر آئیں گے، سر جھکا کر آئیں گے سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں"},
    { id: 2, title: 'Salam  Farmande', type: 'MEDINIAN', verses: "Urdu" ,qoute:"سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں ہم کیا ہیں، ہم کہاں ہیں، کہاں جاتے ہیں ہم اپنی راہوں میں کیا بھٹکتے ہیں آئیں کچھ راہوں میں چلیں گے، مشکل کا سامنا کریں گے شمشیر کی لڑائیوں میں، جانوں کا دھونا کریں گے آپ کی بندگی کا ہی جو سمجھتے ہیں آسرا جب بھی زمین پر آئیں گے، سر جھکا کر آئیں گے سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں"},
    { id: 3, title: 'Al Mehdi', type: 'MECCAN', verses: "Urdu",qoute:"سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں ہم کیا ہیں، ہم کہاں ہیں، کہاں جاتے ہیں ہم اپنی راہوں میں کیا بھٹکتے ہیں آئیں کچھ راہوں میں چلیں گے، مشکل کا سامنا کریں گے شمشیر کی لڑائیوں میں، جانوں کا دھونا کریں گے آپ کی بندگی کا ہی جو سمجھتے ہیں آسرا جب بھی زمین پر آئیں گے، سر جھکا کر آئیں گے سلام یا حسین، سلام یا حسین کربلا کی راہوں میں جو رہتے ہیں سلام یا حسین، سلام یا حسین عبادت کی راہوں میں جو رہتے ہیں"},

  ];
 
  useEffect(() => {
    async function checkLanStatus() {
   
    const value = await AsyncStorage.getItem("data");
    i18n.changeLanguage(value)
    }
    checkLanStatus()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('Top Tracks')}</Text>
<Cards datasend={data}/>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
      container:{
        display:'flex',
       flexDirection:'column',

        paddingHorizontal:20,
        paddingVertical:10
    },
    heading:{
      fontSize:17,
      paddingHorizontal:10,
      fontWeight:'bold',
      color:'#5A338C'
    }
})