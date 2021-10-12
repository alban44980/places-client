import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import HomeListItem from './HomeListItem';

function HomeList({ friends, allFriendsCities, homeScreenPlaces }: any) {
  return (
    <ScrollView
      style={styles.homeListContainer}
      contentContainerStyle={styles.tryme}
      horizontal={true}
    >
      <View style={styles.homeListContent}>
        {friends
          ? friends.map((friend: any) => {
              return <HomeListItem key={friend.name} friend={friend} />;
            })
          : null}
        {allFriendsCities
          ? allFriendsCities.map((allFriendsCitie: any) => {
              return (
                <HomeListItem
                  key={allFriendsCitie.image}
                  allFriendsCitie={allFriendsCitie}
                />
              );
            })
          : null}
        {homeScreenPlaces
          ? homeScreenPlaces.map((homeScreenPlace: any) => {
              return (
                <HomeListItem
                  key={homeScreenPlace.name}
                  homeScreenPlace={homeScreenPlace}
                />
              );
            })
          : null}

        {/* <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem /> */}
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
  },
  homeListContent: {
    flexDirection: 'row',
    borderColor: 'black',
  },
  tryme: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeList;
