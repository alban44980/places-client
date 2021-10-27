import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FriendsList from '../../dummyData/searchModalFriends';
import colors from '../../assets/styles/colors';

function FriendPlacesFilter({
  setSearchResults,
  tagsSelected,
  friendsList,
}: any) {
  // will change to type when interface complete
  const data: any = FriendsList.sort((a, b): any => {
    return b.placeCount > a.placeCount;
  });

  return (
    <View style={styles.friendFilterListContainer}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainerStyle}
        horizontal={true}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItemContainer}>
              <TouchableOpacity style={styles.textOverlayContainer}>
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemCount}>{item.placeCount}</Text>
              </TouchableOpacity>

              <Image
                style={styles.profilePicImage}
                blurRadius={2}
                source={{ uri: item.profile_pic }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

export default FriendPlacesFilter;

const styles = StyleSheet.create({
  friendFilterListContainer: {
    height: '12%',
    width: '100%',
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    marginBottom: 15,
  },

  list: {
    backgroundColor: colors.backgroundDark,
    width: '90%',
    borderStyle: 'solid',
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    borderRadius: 10,
  },

  listContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItemContainer: {
    marginHorizontal: 10,
    width: 70,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePicImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    opacity: 0.35,
  },

  textOverlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  listItemName: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: colors.fontLight,
    marginBottom: 4,
  },

  listItemCount: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.accentFun,
  },
});
