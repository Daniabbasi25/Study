import { View, Text, Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const CoverScreen = ({navigation}) => {
  return (
    <View style={styles.mainview}>
        
      <Image source={require('../../../assets/Images/IMAGE.png')} style={styles.img}/>
        <Image source={require('../../../assets/Images/BG.png')} style={styles.colorbox}/>
      <Image source={require('../../../assets/Images/Logo.png')} style={styles.logo}/>
      <View style={styles.bottomview}>
        <Text style={styles.heading}>
        Hello and 
welcome here!
        </Text>
        <Text style={styles.subtext}>
        Get an overview of how you are performing and motivate yourself to achieve even moew.
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Onboardin1')}>
            <Text style={styles.button}>
            Let’s Start
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoverScreen