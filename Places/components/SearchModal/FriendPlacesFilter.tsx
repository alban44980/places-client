import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

function FriendPlacesFilter() {
  return (
    <View style={styles.friendFilterListContainer}>
      {/* <FlatList /> */}
    </View>
  );
}

export default FriendPlacesFilter;

const styles = StyleSheet.create({
  friendFilterListContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'yellow'
  },
})