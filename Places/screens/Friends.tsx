import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';

import sampleFriendsList from '../dummyData/homeScreenFriends';

function Friends() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <ScrollView style={styles.listContainer}>
        {sampleFriendsList.map((friend: any) => {
          return (
            <View style={styles.friendContainer}>
              <Image
                style={styles.img}
                source={{
                  uri: `https://${friend.image}`,
                }}
              />
              <Text style={styles.friendsName}>{friend.name}</Text>
            </View>
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
