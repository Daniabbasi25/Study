
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoverScreen from '../../screens/onboarding/CoverScreen';
import OnboardingScreen from '../../screens/onboarding/Onboarding1';
import SignUp from '../../screens/Auth/SignUp';
import SignIn from '../../screens/Auth/SignIn';
const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='CoverOnboarding' >
    <Stack.Screen name='CoverOnboarding' component={CoverScreen} options={{headerShown:false}}/>
    <Stack.Screen name='Onboardin1' component={OnboardingScreen} options={{headerShown:false}}/>
    <Stack.Screen name='signUp' component={SignUp} options={{title:'Sign up',headerTitleAlign:'center', headerShadowVisible:false}}/>
    <Stack.Screen name='signIn' component={SignIn} options={{title:'Sign In',headerTitleAlign:'center', headerShadowVisible:false}}/>
   </Stack.Navigator>
  )
}

export default AuthNavigator