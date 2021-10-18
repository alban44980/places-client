import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import MyData from "../MyProfile/MyData";
import ToggleFollowContainer from "./ToggleFollowContainer";
import SearchBar from "../SearchModal/SearchBar";
import UserPlaces from "./UserPlaces";
import friends from "../../dummyData/friends";
import { RootState } from "../../redux/reducers/reducers";
import { useSelector } from "react-redux";

function UserProfile(props: any) {
  const data = props.route.params;
  const [selectedUser, setSelectedUser] = useState<{}>({});

  useEffect(() => {
    getFriendPageInfo();
  }, []);

  const friendId = "f98a2df5-99ad-4757-bf53-f7b98680f825";

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
        <Text style={selectedUser.username}>{selectedUser.first_name}</Text>
      </View>

      <MyData user={selectedUser} />
      <ToggleFollowContainer />
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
