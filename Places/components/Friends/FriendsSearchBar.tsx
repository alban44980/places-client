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

function FriendsSearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <TouchableOpacity style={styles.findNewFriendsButton}>
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
    backgroundColor: colors.backgroundLight,
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
