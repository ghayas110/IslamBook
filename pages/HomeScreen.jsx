import React, { useEffect, useState } from 'react';

import { Button, View,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import TopSection from '../components/TopSection';
import BannerSlider from '../components/BannerSlider';
import Tabs from '../components/Tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabView } from '@rneui/themed';

import Noha from './Noha';
import Nohay from './Nohay';
import Manqabats from './Manqabats';
import SozSalam from './SozSalam';
function HomeScreen({route}) {
  const [data, setdata] = useState()
  const [lan, setLan] = useState()
  const handleSubmit = async () => {
    try {
      await fetch(`https://bartenderbackend.bazazi.co/noha/GetAllNohas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         
        },
      })
        .then(response => response.json())
        .then(dataa => {
  
       setdata(dataa)
        });
    } catch (error) {
      // Alert.alert('An error occurred while processing your request.');
    }

  }
  const { t,i18n } = useTranslation();
  const Tabs = createMaterialTopTabNavigator();
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    async function checkLanStatus() {
   
    const value = await AsyncStorage.getItem("data");
    setLan(value)
    i18n.changeLanguage(value)
    }
handleSubmit()
    checkLanStatus()
  }, [])
  
  return (
    <View >
  <Header/>
  <TopSection/>
  <BannerSlider title={lan=='hi'? data?.Nohas[0]?.noha_name_urdu:data?.Nohas[0]?.noha_name_eng}  type={lan=='hi'? data?.Nohas[0].writer_name_urdu:data?.Nohas[0].writer_name_eng}/>
  
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'black',
        height: 3,
      }}
      containerStyle={{backgroundColor:'white'}}
      variant="primary"
    >
      <Tab.Item
        title={t('Noha')}
        titleStyle={{ fontSize: 15, color:'black' }}
      
      />
      <Tab.Item
        title={t('Manqabat')}
        titleStyle={{ fontSize: 15, color:'black' }}
       
      />
      <Tab.Item
        title={t('Soz')}
        titleStyle={{ fontSize: 15, color:'black' }}
   
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ width: '100%',height:900 }}>
    <Nohay/>
      </TabView.Item>
      <TabView.Item style={{ width: '100%',height:900 }}>
     <Manqabats/>
      </TabView.Item>
      <TabView.Item style={{  width: '100%',height:900 }}>
    <SozSalam/>
      </TabView.Item>
    </TabView>

    </View>
  );
}

export default HomeScreen
