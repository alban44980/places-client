import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ApiService from "../../ApiService";
import { FriendSchema, OtherUserInfoSchema } from "../../Interfaces";
import { saveUserFriendsInfo } from "../../redux/actions/actions";
import { RootState } from "../../redux/reducers/reducers";
import colors from "../../assets/styles/colors";
import fonts from "../../assets/styles/fonts";


function ToggleFollowContainer({ friendId, setSelectedUser }: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch();


  // Redux
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector((state: RootState) => state.refreshToken);
  const userFriendInfo: any = useSelector((state: RootState) => state.userFriendInfo);



  const setFollowingToggle = () => {
    for (let friend of userFriendInfo) {
      if (friend.id === friendId) {
        setIsEnabled(true);
      }
    }
  };

  useEffect(() => {
    setFollowingToggle();
  }, []);

  const addRemoveFriend: FriendSchema = { FriendId: friendId };
  const infoFriend: OtherUserInfoSchema = { userId: friendId };

  const addFriend: any = async () => {
    try {
      await ApiService.addFriend(addRemoveFriend, refreshToken, accessToken);
      const friendsInfo = await ApiService.getFriendsCitesPlace(
        refreshToken,
        accessToken
      );
      dispatch(saveUserFriendsInfo(friendsInfo));
      const updatedFriend = await ApiService.getOtherUserInfo(
        infoFriend,
        refreshToken,
        accessToken
      );
      setSelectedUser(updatedFriend);
    } catch (e) {
      console.log("pop", e);
    }
  };

  const removeFriend: any = async () => {
    try {
      await ApiService.removeFriend(addRemoveFriend, refreshToken, accessToken);
      const friendsInfo = await ApiService.getFriendsCitesPlace(
        refreshToken,
        accessToken
      );
      dispatch(saveUserFriendsInfo(friendsInfo));
      const nonFriend = await ApiService.getOtherUserInfo(
        infoFriend,
        refreshToken,
        accessToken
      );
      setSelectedUser(nonFriend);
    } catch (e) {
      console.log("pack", e);
    }
  };

  const addOrRemoveFriend = () => {
    if (isEnabled === false) {
      addFriend();
    } else {
      removeFriend();
    }
  };

  return (
    <View style={styles.followContainer}>
      <View style={styles.switchContainer}>
        <Switch
          style={styles.switchButton}
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          trackColor={{ false: colors.backgroundLight, true: colors.backgroundDark }}
          thumbColor={isEnabled ? colors.backgroundLight : colors.backgroundBright}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            toggleSwitch();
            addOrRemoveFriend();
          }}
          value={isEnabled}
        />
      </View>
      <View style={styles.textContainer}>
        {isEnabled ? (
          <Text style={styles.textContentFollowing}>Following</Text>
        ) : (
          <Text style={styles.textContentFollow}>Follow</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  followContainer: {
    // backgroundColor: 'red',
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
  },

  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },

  switchButton: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },

  textContentFollowing: {
    fontSize: 17,
    fontFamily: fonts.light
  },

  textContentFollow: {
    fontSize: 16,
    fontFamily: fonts.regular
  },
});

export default ToggleFollowContainer;
