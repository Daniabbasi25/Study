import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Box: {
    width: width / 1.04,
    backgroundColor: '#4178D4',
    height: (1500 / height) * 100,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  mainButton: {
    color: '#fff',
    width: width / 1.2,
    textAlign: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  category: {
    color: '#0F172A',
    fontSize: 17,
    fontWeight: '600',
  },
  miniButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    color: '#64748B',
    backgroundColor: '#fff',
    borderColor: 'rgba(203, 213, 225, 1)',
    fontSize: 15,
  },
  miniButtonActive: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#4178D4',
  },
  item: {
    width: width / 1.2,
    flexDirection: 'row',
    marginHorizontal: 6,
    // alignSelf: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 10,
  },
  flatListView: {
    backgroundColor: 'red',
    height: height / 2,
    marginTop: 20,
    // paddingTop
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
