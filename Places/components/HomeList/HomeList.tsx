import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import HomeListItem from './HomeListItem';

function HomeList() {
  return (
    <ScrollView style={styles.homeListContainer} horizontal={true}>
      <View style={styles.homeListContent}>
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeListContainer: {
    backgroundColor: 'grey',
    borderRadius: 25,
    margin: 10,
    height: '25%',
    // flexGrow: 1,
    // justifyContent: 'space-evenly',
  },
  homeListContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
});

export default HomeList;
