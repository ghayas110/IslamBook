import React from 'react';
import { Button, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
function HomeScreen() {

  const { t } = useTranslation();
    const navigation = useNavigation()
    
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
