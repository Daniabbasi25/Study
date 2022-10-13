import {View, Text} from 'react-native';
import React from 'react';
import {AuthProvider} from './navigator/AuthProvider';
import AppRoute from './navigator/Navigator';

const Navigation = () => {
  return (
    // <AuthProvider>
    <AppRoute />
    // </AuthProvider>
  );
};

export default Navigation;
