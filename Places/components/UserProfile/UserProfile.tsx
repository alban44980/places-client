import React, { useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import MyData from "../MyProfile/MyData";
import ToggleFollowContainer from "./ToggleFollowContainer";
import SearchBar from "../SearchModal/SearchBar";
import UserPlaces from "./UserPlaces";
import friends from "../../dummyData/friends";

function UserProfile(props: any) {
  const data = props.route.params;

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);

  return (
    <SafeAreaView style={styles.userProfileContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.username}>{data.first_name}</Text>
      </View>

      <MyData user={friends[0]} />
      <ToggleFollowContainer />
      {/* //SEARCHBAR TO BE MODIFIED */}
      <SearchBar />
      <UserPlaces />
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
