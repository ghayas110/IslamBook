import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import SegmentSelect from '../../components/SegmentSelect'
import { SegmentedButtons } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Language = ({onLogin}) => {
    const [value, setValue] = React.useState('');
    const navigation =useNavigation()
   const handleChange=async(value)=>{
    try {
      await    AsyncStorage.setItem('data', value);
      onLogin()
    } catch (e) {
      // saving error
      console.log(e)
    }
   }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.components}>

      <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Choose your Language </Text>
      </View>
      <SegmentedButtons style={{padding:20}}
        value={value}
        onValueChange={(value)=> handleChange(value)}
        buttons={[
          {
            value: 'hi',
            label: 'Urdu',
          },
          {
            value: 'en',
            label: 'English',
          },
          { value: 'fr', label: 'Arabic' },
        ]}
      />
 </SafeAreaView>
  )
}

export default Language

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
    },
  });