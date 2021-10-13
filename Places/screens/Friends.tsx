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

type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Friends() {
  const navigation = useNavigation<userScreenProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
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
  searchBarContainer: {
    backgroundColor: 'gray',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchBar: {
    backgroundColor: 'white',
    height: '50%',
    width: '60%',
    paddingLeft: '3%',
  },

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
