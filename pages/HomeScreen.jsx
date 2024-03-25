import React, { useEffect } from 'react';

import { Button, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
function HomeScreen({route}) {
  const { t,i18n } = useTranslation();
    const navigation = useNavigation()
 
    useEffect(() => {
      async function checkLanStatus() {
     
      const value = await AsyncStorage.getItem("data");
      i18n.changeLanguage(value)
      }
      checkLanStatus()
    }, [])
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('hello')}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen
