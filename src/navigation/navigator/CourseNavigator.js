import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoursesScreen from '../../screens/CoursesScreen';
import CourseDetailScreen from '../../screens/CourseDetailScreen';

const CourseNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="CourseScreen">
      <Stack.Screen
        name="CourseScreen"
        component={CoursesScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitle: 'Courses',
        }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={{headerShadowVisible: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default CourseNavigator;
