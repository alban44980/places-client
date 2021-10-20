import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import HomeListItem from './HomeListItem';
import { BlurView } from 'expo-blur';

function HomeList({
  data,
  route,
  setPlace,
  setCity,
  setFriend,
  setPlaceVisible,
  placeVisible,
  searchVisible,
  setSearchVisible,
}: any) {
  let labelText = () => {
    if (route === 'place') return 'Explore friends recently added places';
    if (route === 'userProfile') return 'Recently active friends';
    if (route === 'search') return 'See popular cities';
  };

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listLabel}>{labelText()}</Text>
      <ScrollView
        style={styles.homeListContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.homeListContent}>
          {data
            ? data.map((el: any) => {
                return (
                  <HomeListItem
                    key={el.id}
                    data={el}
                    route={route}
                    setPlace={setPlace}
                    setCity={setCity}
                    setFriend={setFriend}
                    setPlaceVisible={setPlaceVisible}
                    placeVisible={placeVisible}
                    searchVisible={searchVisible}
                    setSearchVisible={setSearchVisible}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: 300,
    backgroundColor: colors.backgroundLight,
    marginBottom: 50,
  },

  listLabel: {
    fontFamily: fonts.semiBold,
    paddingHorizontal: 10,
    fontSize: 22,
    color: colors.fontDark,
  },

  homeListContainer: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeListContent: {
    flexDirection: 'row',
  },
});

export default HomeList;
