import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import MyData from "../MyProfile/MyData";
import ToggleFollowContainer from "./ToggleFollowContainer";
import SearchBar from "../SearchModal/SearchBar";
import UserPlaces from "./UserPlaces";
import { RootState } from "../../redux/reducers/reducers";
import { useSelector } from "react-redux";

function UserProfile(props: any) {
  const data = props.route.params;
  const [selectedUser, setSelectedUser] = useState<{
    username: string;
    first_name: string;
    Cities: string;
  }>({ username: "", first_name: "", Cities: "" });

  useEffect(() => {
    getFriendPageInfo();
  }, []);

  const friendId: string = data.id;

  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  function getFriendPageInfo() {
    for (let friend of userFriendInfo) {
      if (friend.id === friendId) {
        setSelectedUser(friend);
      }
    }
  }

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);

  return (
    <SafeAreaView style={styles.userProfileContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.username}>{selectedUser.first_name}</Text>
      </View>

      <MyData user={selectedUser} />
      <ToggleFollowContainer
        setSelectedUser={setSelectedUser}
        friendId={friendId}
      />
      {/* //SEARCHBAR TO BE MODIFIED */}
      <SearchBar />
      <UserPlaces citiesPlaces={selectedUser.Cities} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userProfileContainer: {
    flex: 1,
  },
  titleContainer: {
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 25,
  },
});

export default UserProfile;
