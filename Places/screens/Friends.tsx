import React, { useState } from 'react';
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
import FriendsSearchBar from '../components/Friends/FriendsSearchBar';
import FriendsList from '../components/Friends/FriendsList';
import colors from '../assets/styles/colors';

// type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Friends() {
  // const navigation = useNavigation<userScreenProp>();

  // if this is true then
  // 1) friends list is displayed
  // 2) search filters freinds
  // if false show result of an api call to get user from user name
  const [friendView, setFriendView] = useState<Boolean>(true);

  return (
    // need to have a different view if the button is pressed
    // ---> this should be a local state that gets toggled

    <SafeAreaView style={styles.friendsContainer}>
      <FriendsSearchBar />

      {
        friendView && (
          // will be a ? instead of &&
          <FriendsList />
        )
        //  or
        // <FindUsers />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  friendsContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
});

export default Friends;
