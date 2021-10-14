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

// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../App';
import SearchBar from '../components/SearchModal/SearchBar';
import FriendsSearchBar from '../components/Friends/FriendsSearchBar'
import FriendsList from '../components/Friends/FriendsList';
import colors from '../assets/styles/colors';





// type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Friends() {
  // const navigation = useNavigation<userScreenProp>();

  

  return (
    <SafeAreaView style={styles.friendsContainer}>
      

      <FriendsSearchBar />

      <FriendsList />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  friendsContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark
  }

});

export default Friends;
