import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ListViewBase,
} from 'react-native';

function HomeListItem() {
  return <View style={styles.itemContainer}></View>;
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'black',
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default HomeListItem;
