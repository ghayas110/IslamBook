import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';



export default function CardManqabat({datasend}) {

  const navigation = useNavigation()
  const [lan, setLan] = useState()
  useEffect(() => {
    async function checkLanStatus() {
   

      const value = await AsyncStorage.getItem("data");
  setLan(value)

    }
  
    checkLanStatus()
  }, [])

  const Card = ({ item,onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.number}>{item.id}</Text>
      <View style={styles.content}>
        <Text style={styles.title}>{lan=='hi'? item.manqabat_name_urdu:item.manqabat_name_eng}</Text>
        <Text style={styles.type}>{lan=='hi'? item.writer_name_urdu:item.writer_name_eng} </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList 
      data={datasend}
      renderItem={({ item }) => <Card item={item} onPress={()=>navigation.navigate('MDetails',item)} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center'
  },
  number: {
    fontSize: 24,
    color: 'purple'
  },
  content: {
    marginLeft: 20
  },
  title: {
    fontSize: 18
  },
  type: {
    color: 'grey'
  }
});
