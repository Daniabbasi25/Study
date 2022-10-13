import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../../components/TextField';
import auth from '@react-native-firebase/auth';
import PrimaryButton from '../../../components/PrimaryButton';
import {styles} from './styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handlelogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TextField
        label="Email"
        placeholder="study@gmail.com"
        val={email}
        setvalue={setEmail}
        keyboardtype="email-address"
      />
      <TextField
        label="Password"
        placeholder="Your password"
        pas={true}
        val={password}
        setvalue={setPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonBox}>
        <PrimaryButton buttonText="Sign In" buttonFunction={handlelogin} />
      </View>
      <View style={styles.dontBox}>
        <Text style={{color: 'rgba(51, 65, 85, 1)'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={{color: 'rgba(65, 120, 212, 1)'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
