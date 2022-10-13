import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <Image source={require('../../../assets/Images/Rectangle953.png')} style={styles.Image}/>
      <Image source={require('../../../assets/Images/BGO.png')} style={styles.BGImage}/>
      <Image source={require('../../../assets/Images/Logo.png')} style={styles.logo}/>
      <Text style={styles.heading}>
      Find your favorite class
      </Text>
      <Text style={styles.subtext}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim, ac amet ultrices.
      </Text>
      <View style={styles.buttonbox}>
        <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
          <Text style={styles.buttons}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('signIn')}>
          <Text style={styles.buttons}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen