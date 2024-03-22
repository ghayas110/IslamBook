import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import SegmentSelect from '../../components/SegmentSelect'
import { SegmentedButtons } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
const Language = () => {
    const [value, setValue] = React.useState('');
    const navigation =useNavigation()
   const handleChange=(value)=>{
    console.log(value)
setValue(value)
navigation.navigate('Home')
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
            value: 'Urdu',
            label: 'Urdu',
          },
          {
            value: 'English',
            label: 'English',
          },
          { value: 'Arabic', label: 'Arabic' },
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