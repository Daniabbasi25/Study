import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/HomeScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../../screens/MessageScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const handlesignout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      // activeColor="#316D86"
      // inactiveColor="#CBD5E1"wwww
      screenOptions={{
        tabBarActiveTintColor: '#316D86',
        tabBarInactiveTintColor: '#ABABAB',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: false,
          tabBarStyle: {height: 50},
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntIcon name="appstore1" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Assignment"
        component={MessageScreen}
        options={{
          headerShown: false,

          tabBarStyle: {height: 50},
          tabBarLabel: 'Message',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-range-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarStyle: {height: 50},
          tabBarLabel: 'Message',
          tabBarIcon: ({color}) => (
            <AntIcon name="message1" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // headerShown: false,
          // headerStyle: {borderBottomColor: 'red'},
          // headerShadowVisible: true,
          // headerBackground:{},
          // tabBarBadge: 3,
          tabBarStyle: {height: 50},
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={30} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
              }}>
              <Image source={require('../../assets/Images/LogoIcon.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Study
              </Text>
            </View>
          ),
          headerRight: () => (
            <>
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={handlesignout}>
                <MaterialIcons name="logout" size={30} color={'gray'} />
              </TouchableOpacity>
            </>
          ),
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
export default MyTabs;
