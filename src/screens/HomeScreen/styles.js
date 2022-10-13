import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#F3F5F8',
    flex: 1,
    // flexDirection:'row',
    // justifyContent:'space-between',
  },
  headerSection: {
    margin: 10,
  },
  headingOne: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
  },
  header: {
    backgroundColor: '#F3F5F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width / 30,
    marginTop: 5,
    alignItems: 'center',
  },

  subtext: {
    fontWeight: '400',
    color: '#64748B',
    fontSize: 15,
  },
  boxesContainer: {
    // backgroundColor: '#F3F5F8',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    width: width / 2.3,
    height: height / 8.5,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },

  heading2: {
    color: '#64748B',
    marginLeft: 25,
    fontFamily: 'Poppins',
    fontSize: 17,
    marginTop: 5,
    fontWeight: 'bold',
    // lineHight:2,
    // letterSpace:2,
  },

  bottomContainer: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 15,
  },
  bottomIcon: {flexDirection: 'row', justifyContent: 'space-around'},
  iconBox: {padding: 12, alignItems: 'center'},
  iconText: {
    fontSize: 17,
    color: '#64748B',
    paddingTop: 5,
    fontWeight: 'bold',
  },

  presence: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#B45309',
    textTransform: 'capitalize',
  },
  completeness: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4178D4',
    textTransform: 'capitalize',
  },

  assignments: {
    paddingBottom: 5,
    marginLeft: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#52B6DF',
    textTransform: 'capitalize',
  },
  totalSubject: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F59E0B',
    textTransform: 'capitalize',
  },

  //   SectionStyle: {
  //     flexDirection: 'row',
  //     margin: 20,
  //     marginTop: 15,
  //   },
  //   label: {
  //     position: 'absolute',
  //     marginLeft: 20,
  //     fontSize: 20,
  //     color: 'black',
  //   },
  //   inputStyle: {
  //     flex: 1,
  //     color: 'black',
  //     paddingLeft: 25,
  //     paddingRight: 15,
  //     borderRadius: 10,
  //     borderColor: '#CBD5E1',
  //     borderWidth: 2,
  //     marginTop: 15,
  //     height: 50,
  //     fontSize: 20,
  //     fontFamily: 'Poppins',
  //     fontStyle: 'normal',
  //     fontSize: 15,
  //     lineHeight: 25,
  //     alignItems: 'center',
  //     letterSpacing: 0.2,
  //     color: '#64748B',
  //     backgroundColor: '#F1F5F966',
  //   },

  //   SignButton: {
  //     width: 350,
  //     height: 49,
  //     margin: 20,
  //     backgroundColor: 'red',
  //   },
  //   buttonText: {
  //     width: 350,
  //     height: 49,
  //     margin: 20,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'green',
  //   },
  //   checkboxContainer: {
  //     flexDirection: 'row',
  //     marginBottom: 20,
  //     marginLeft: 16,
  //   },
  //   checkbox: {
  //     fontSize: 20,
  //     alignSelf: 'center',
  //   },
  //   checkBoxText: {
  //     marginLeft: 20,
  //     marginTop: 5,
  //     fontSize: 20,
  //     fontFamily: ' Poppins',
  //     fontSize: 13,
  //     lineHeight: 22,
  //     letterSpacing: 0.2,
  //   },

  //   // Show Modal

  //   centeredView: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     // marginTop: 10,
  //   },
  //   modalView: {
  //     width: width / 1.1,
  //     height: height / 1.7,
  //     margin: 20,
  //     backgroundColor: 'white',
  //     borderRadius: 20,
  //     padding: 35,
  //     alignItems: 'center',
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 4,
  //     elevation: 5,
  //   },
  //   button: {
  //     width: width / 2,
  //     height: height / 15,
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2,
  //     position: 'absolute',
  //     marginTop: 350,
  //   },

  //   buttonClose: {
  //     backgroundColor: '#52B6DF',
  //   },
  //   textStyle: {
  //     color: 'white',
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     // marginTop:5,
  //     fontSize: 20,
  //   },
  //   modalHeader: {
  //     position: 'absolute',
  //     marginTop: 190,
  //     textAlign: 'center',
  //     fontSize: 23,
  //     fontWeight: 'bold',
  //   },
  //   modalText: {
  //     marginTop: 120,
  //     textAlign: 'center',
  //   },
});
