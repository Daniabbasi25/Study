import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
// import {AuthContext, AuthProvider} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {UserAction} from '../../redux/UserSlice';
const AppRoute = () => {
  // check if login
  const myuser = useSelector(state => state.user.myuser);
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    // const u = {email: user.email, password: user.password};
    // dispatch(UserAction.signIn(u));
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return <ActivityIndicator />;
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
