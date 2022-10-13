import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useState} from 'react';
const DATA = [
  {
    id: '1',
    title: 'First Item that can go high then the line height',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '2',
    title: 'Second Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '3',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '4',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '5',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '6',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '7',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '8',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
  {
    id: '9',
    title: 'Third Item',
    description:
      'this is the description of the course where everything will be explained',
    img: 'https://loremflickr.com/320/240',
  },
];
const CoursesScreen = () => {
  const [filter, setFilter] = useState('All');
  return (
    <View style={styles.screen}>
      <View style={styles.Box}>
        <Text style={styles.heading}>
          Upgrade you skill and get your certified Courses
        </Text>
        <TouchableOpacity>
          <Text style={styles.mainButton}>Go to my courses</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={styles.category}>Categories</Text>
        <TouchableOpacity>
          <Text style={{color: '#64748B', fontWeight: '500', fontSize: 15}}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={() => setFilter('All')}>
          <Text
            style={
              filter === 'All' ? styles.miniButtonActive : styles.miniButton
            }>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Matemathics')}>
          <Text
            style={
              filter === 'Matemathics'
                ? styles.miniButtonActive
                : styles.miniButton
            }>
            Matemathics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Biology')}>
          <Text
            style={
              filter === 'Biology' ? styles.miniButtonActive : styles.miniButton
            }>
            Biology
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('English')}>
          <Text
            style={
              filter === 'English' ? styles.miniButtonActive : styles.miniButton
            }>
            English
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => console.log(item.id)}>
              <View style={styles.item}>
                <Image source={{uri: item.img}} style={styles.itemImage} />
                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CoursesScreen;
