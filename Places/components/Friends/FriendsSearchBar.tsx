import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/styles/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import ApiService from '../../ApiService';
import { SearchUserSchema } from '../../Interfaces';

function FriendsSearchBar({
  setView,
  setFriendsList,
  setNonFriendsList,
  friendsList,
  searchList,
  nonFriendsList,
}: any) {
  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );
  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );
  const toggleList = () => setView((previousState: boolean) => !previousState);
<<<<<<< HEAD
  const [searchInput, setSearchInput] = useState<string>("");
=======
  const [searchInput, setSearchInput] = useState<string>('');
  // console.log(searchInput);
>>>>>>> 9b473ed905a22c3dcbb1b12684c468ae67993b5b

  const filterFriendsList = (search: string) => {
    let res: any = [];
    let text: string = search;
    friendsList.filter((friend: any) => {
      if (
        text.length > 0 &&
        text.toLowerCase() ===
          friend.user_name.substring(0, text.length).toLowerCase()
      ) {
        res.push(friend);
        res.sort(function (a: any, b: any) {
          return a.user_name.toLowerCase() === b.user_name.toLowerCase()
            ? 0
            : a.user_name.toLowerCase() < b.user_name.toLowerCase()
            ? -1
            : 1;
        });
        setFriendsList(res);
      } else if (text.length === 0) {
        setFriendsList(userFriendInfo);
      }
    });
  };

  const filterNonFriendsList = async (search: string) => {
    try {
      const searchValue: SearchUserSchema = { searchValue: search };
      if (searchValue.searchValue.length > 0) {
        const matchingFriends = await ApiService.searchUser(
          searchValue,
          refreshToken,
          accessToken
        );
        setNonFriendsList(
          matchingFriends.sort(function (a: any, b: any) {
            return a.user_name.toLowerCase() === b.user_name.toLowerCase()
              ? 0
              : a.user_name.toLowerCase() < b.user_name.toLowerCase()
              ? -1
              : 1;
          })
        );
      } else if (searchValue.searchValue.length === 0) {
        setNonFriendsList([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={
          searchList
            ? (text) => {
                setSearchInput(text);
                filterFriendsList(text);
              }
            : (text) => {
                setSearchInput(text);
                filterNonFriendsList(text);
              }
        }
        value={searchInput}
      />
      <TouchableOpacity
        style={styles.findNewFriendsButton}
        onPress={() => {
          toggleList();
          setSearchInput('');
          setFriendsList(userFriendInfo);
          setNonFriendsList([]);
        }}
      >
        <Text style={styles.buttonLabelText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FriendsSearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.accentFun,
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchBar: {
    backgroundColor: colors.backgroundLight,
    height: '50%',
    width: '60%',
    paddingLeft: '3%',
    borderRadius: 10,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
  },

  findNewFriendsButton: {
    height: '45%',
    width: '11%',
    backgroundColor: colors.backgroundDark,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  buttonLabelText: {
    fontSize: 27,
  },
});
