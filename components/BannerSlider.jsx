import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const BannerSlider = ({title,type}) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#8b0100']}   start={{x: 0.7, y: 0.8}} end={{x: 0.20, y: 0.10}} style={styles.container}>
        
        <View style={styles.containers}>
<View style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
<Image source={require('../images/sbook.png')}/>
<Text style={styles.heading}>Latest Noha</Text>
</View>
<View>

<Text style={styles.headings}>{title} </Text>
<Text style={styles.headings}>{type} </Text>
</View>
        </View>
        <View>

<Image source={require('../images/imam.png')} style={{width:200,height:120,resizeMode:'contain',marginRight:45}}/>
        </View>
    </LinearGradient>
  )
}

export default BannerSlider

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
    paddingTop:10,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'#D22A85'
    },
    containers:{
        display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'column',height:70
    },
    heading:{
        fontSize:17,
        paddingHorizontal:10,
        fontWeight:'bold',
        color:'white'
    },
    headings:{
        fontSize:13,
        paddingHorizontal:10,
      
        color:'white'
    }
})