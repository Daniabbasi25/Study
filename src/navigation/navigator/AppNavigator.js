import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/HomeScreen';
import MyTabs from './Tab';
import CoursesScreen from '../../screens/CoursesScreen';
import CourseNavigator from './CourseNavigator';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Course"
        component={CourseNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
