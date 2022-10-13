import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const myIcon = (
  <Icon
    name="notifications-outline"
    size={30}
    color="#64748B"
    style={{fontWeight: 'bold'}}
  />
);
const Home = ({navigation}) => {
  // const myuser = useSelector(state => state.user.myuser);
  const [user, setUser] = useState();
  const [isloding, setIsloding] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  useEffect(() => {
    firestore()
      .collection('user')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          const u = documentSnapshot.data();
          setUser(u);
          console.log(user);
          setIsloding(false);
        }
      });
  }, []);
  const handlesignout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  //
  const data = {
    labels: ['Economy', 'Geography', 'English', 'urdu'],
    datasets: [
      {
        data: [99, 80, 95, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
      },
    ],
  };
  return (
    <>
      {/* <StatusBar backgroundColor={'#000'} /> */}
      {!isloding ? (
        <View style={styles.homeContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            <View style={styles.headerSection}>
              <Text style={styles.headingOne}>Hi, {user.userName}</Text>
              <Text
                style={{color: '#64748B', fontSize: 15, letterSpacing: 0.3}}>
                Here is Your activity today
              </Text>
            </View>
            <View style={styles.headerSection}>
              <TouchableOpacity style={{marginTop: 10}} onPress={handlesignout}>
                <Icon name="bell-o" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          {/* {/ Box area /} */}
          <View style={styles.boxesContainer}>
            <View style={styles.box}>
              <Text style={styles.presence}>89%</Text>
              <Text style={styles.heading2}>Presence</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.completeness}>100%</Text>
              <Text style={styles.heading2}>Completeness</Text>
            </View>
          </View>
          <View style={styles.boxesContainer}>
            <View style={styles.box}>
              <Text style={styles.assignments}>18%</Text>
              <Text style={styles.heading2}>Assigments</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.totalSubject}>12%</Text>
              <Text style={styles.heading2}>Total Subject</Text>
            </View>
          </View>

          {/* {/ Box area End /} */}

          {/* {/ Icon area start /} */}
          <View style={styles.bottomContainer}>
            <View style={styles.bottomIcon}>
              <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <View style={styles.iconBox}>
                  <FontAwesome5
                    name="book-open"
                    size={35}
                    color="white"
                    style={{
                      backgroundColor: '#316D86',
                      padding: 11,
                      borderRadius: 20,
                    }}
                  />
                  <Text style={styles.iconText}>Course</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconBox}>
                  <FontAwesome5
                    name="graduation-cap"
                    size={35}
                    color="white"
                    style={{
                      backgroundColor: '#27487F',
                      padding: 11,
                      borderRadius: 20,
                    }}
                  />
                  <Text style={styles.iconText}>Subjects</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconBox}>
                  <FontAwesome
                    name="book"
                    size={35}
                    color="white"
                    style={{
                      backgroundColor: '#F59E0B',
                      padding: 12,
                      borderRadius: 20,
                    }}
                  />
                  <Text style={styles.iconText}>Class</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconBox}>
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={35}
                    color="white"
                    style={{
                      backgroundColor: '#46BD84',
                      padding: 11,
                      borderRadius: 20,
                    }}
                  />
                  <Text style={styles.iconText}>Presence</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* {/ Icon area End /} */}
          <View
            style={{
              position: 'absolute',
              marginTop: 430,
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              Schedule
            </Text>
          </View>
          {/* {/ BarChart area End /} */}
          <View style={{position: 'absolute', marginTop: 470}}>
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              style={{
                marginVertical: 5,
                borderRadius: 16,
                marginRight: 10,
              }}
              chartConfig={{
                backgroundGradientFrom: '#FFFFFF',
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: '#08130D',
                backgroundGradientToOpacity: 0,
                color: () => '#64748B',
                strokeWidth: 3,
                barPercentage: 0.5,
                decimalPlaces: 0,
                useShadowColorFromDataset: false,
                propsForLabels: {
                  fontSize: '13',
                  fontWeight: 'bold',
                  fontFamily: 'poppins',
                },
                fillShadowGradient: '#000080',
                fillShadowGradientOpacity: 1,

                propsForBackgroundLines: {
                  strokeWidth: 1,
                  stroke: '#e3e3e3',
                  strokeDasharray: '0',
                },
              }}
              withHorizontalLabels={true}
              showValuesOnTopOfBars={true}
              horizontalLabelRotation={0}
              withInnerLines={true}
              fromZero={true}
              horizontal={true}
              flatColor={true}
            />
          </View>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={40} color="#52B6DF" />
        </View>
      )}
    </>
  );
};

export default Home;
