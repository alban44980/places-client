import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchModal/SearchBar";
import FriendsSearchBar from "../components/Friends/FriendsSearchBar";
import FriendsList from "../components/Friends/FriendsList";
import colors from "../assets/styles/colors";
import FindUsers from "../components/Friends/FindUsers";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/reducers";

// type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Friends() {
  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  // if false show result of an api call to get user from user name
  const [searchList, setSearchList] = useState<Boolean>(true);
  const [friendsList, setFriendsList] = useState<[]>([]);
  const [nonFriendsList, setNonFriendsList] = useState<[]>([]);
  useEffect(() => {
    setFriendsList(userFriendInfo);
  }, []);

  return (
    // need to have a different view if the button is pressed
    // ---> this should be a local state that gets toggled

    <SafeAreaView style={styles.friendsContainer}>
      <FriendsSearchBar
        searchList={searchList}
        setView={setSearchList}
        friendsList={friendsList}
        setFriendsList={setFriendsList}
        setNonFriendsList={setNonFriendsList}
        nonFriendsList={nonFriendsList}
      />

      {searchList ? (
        <FriendsList friendsList={friendsList} />
      ) : (
        <FindUsers nonFriendsList={nonFriendsList} />
      )}
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
