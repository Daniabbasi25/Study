import {Text, View} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../../components/TextField';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import PrimaryButton from '../../../components/PrimaryButton';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handlesignup = () => {
    alert(name + email + password + number + toggleCheckBox);

    signupfirebase(email.trim(), password.trim());
  };
  const signupfirebase = async (email, password) => {
    try {
      const userCreditionals = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (userCreditionals != null) {
        const firestoreInstance = firebase
          .firestore()
          .collection('user')
          .doc(auth().currentUser.uid);
        firestoreInstance.set({
          userId: auth().currentUser.uid,
          userName: name,
          userEmail: email,
          number: number,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TextField
        label="Name"
        placeholder="Your Name"
        val={name}
        setvalue={setName}
      />
      <TextField
        label="Email"
        placeholder="study@gmail.com"
        keyboardtype="email-address"
        val={email}
        setvalue={setEmail}
      />
      <TextField
        label="Password"
        placeholder="Your password"
        pas={true}
        val={password}
        setvalue={setPassword}
      />
      <TextField
        label="Phone Number"
        placeholder="0334 xxxx xxxx"
        keyboardtype="phone-pad"
        val={number}
        setvalue={setNumber}
      />

      {/* <Button title='Sign Up' onPress={handlesignup}/> */}
      <View style={styles.checkboxList}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: '#4178D4'}}
          style={styles.checkbox}
        />
        <Text style={styles.conditionText}>
          I agree with the terms and conditions and also the protection of my
          personal data on this application
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <PrimaryButton buttonText="Sign Up" buttonFunction={handlesignup} />
      </View>
    </View>
  );
};

export default SignUp;
