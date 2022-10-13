import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#52B6DF" />
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  // mainview:{
  //   flex:1,
  //   alignItems:'center'
  // }
});
