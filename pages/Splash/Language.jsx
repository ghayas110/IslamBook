import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import SegmentSelect from '../../components/SegmentSelect'
import { SegmentedButtons } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginInput from '../../components/LoginInput'
const Language = ({onLogin}) => {
    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');
    const navigation =useNavigation()
   const handleChange=async(value)=>{
    try {
      await    AsyncStorage.setItem('data', value);
      AsyncStorage.setItem("name",name)
      onLogin()
    } catch (e) {
      // saving error
      console.log(e)
    }
   }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.components}>
      </View>
      <LoginInput 
      placeholder={"Please Enter Name"}
      placeholderColor={"black"}
      icon={"user"}
      
      setValues={(text) => setName(text)}
      
      />
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