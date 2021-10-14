import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import sampleFriendsList from '../dummyData/homeScreenFriends';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import SearchBar from '../components/SearchModal/SearchBar';
import FriendsSearchBar from '../components/Friends/FriendsSearchBar'





type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Friends() {
  const navigation = useNavigation<userScreenProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      

      <FriendsSearchBar />

      <ScrollView style={styles.listContainer}>
        {sampleFriendsList.map((friend: any) => {
          return (
            <TouchableOpacity
              style={styles.friendContainer}
              onPress={() => navigation.navigate('userProfile')}
            >
              <Image
                style={styles.img}
                source={{
                  uri: `https://${friend.image}`,
                }}
              />
              <Text style={styles.friendsName}>{friend.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  listContainer: {
    backgroundColor: 'whitesmoke',
  },
  friendContainer: {
    backgroundColor: 'lightblue',
    height: 100,
    width: '90%',
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  img: {
    marginLeft: 10,
    width: '20%',
    height: '80%',
    borderRadius: 50,
  },
  friendsName: {
    fontSize: 40,
    marginLeft: 20,
  },
});

export default Friends;
