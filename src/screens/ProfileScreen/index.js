import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../components/TextField';
import {styles} from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const [imagelink, setimage] = useState({});
  const [isimage, setisimage] = useState(false);
  const handleImage = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const result = await launchImageLibrary(options);
    console.log(result);
    imageupload(result.assets[0]);
    setisimage(true);
    setimage(result.assets[0]);
  };
  const imageupload = imagepath => {
    console.log(JSON.stringify(imagepath));
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity onPress={handleImage}>
        {isimage ? (
          <Image source={{uri: imagelink.uri}} style={styles.image} />
        ) : (
          <Image
            source={require('../../assets/Images/avatar.jpg')}
            style={styles.image}
          />
        )}
        <View style={{position: 'absolute', left: 225}}>
          <MaterialIcons name="camera-alt" size={30} color={'green'} />
        </View>
      </TouchableOpacity>
      <TextField
        label="Name"
        // placeholder="study@gmail.com"
        val="Danyal"
        // setvalue={setEmail}
        // keyboardtype="email-address"
      />
      <TextField
        label="Email"
        val="study@gmail.com"
        keyboardtype="email-address"
      />

      <TextField
        label="Date of Birth"
        // placeholder="study@gmail.com"
        val="25/06/2000"
        // setvalue={setEmail}
        keyboardtype="phone-pad"
      />
      <TextField
        label="Phone Number"
        // placeholder="study@gmail.com"
        val="03150502846"
        // setvalue={setEmail}
        keyboardtype="phone-pad"
      />
      <View style={{marginTop: 30}}>
        <PrimaryButton buttonText="Update Profile" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
