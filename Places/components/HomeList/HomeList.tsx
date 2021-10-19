import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import colors from "../../assets/styles/colors";
import fonts from "../../assets/styles/fonts";
import HomeListItem from "./HomeListItem";

function HomeList({ data, route, setPlace, setCity, setFriend, setPlaceVisible, placeVisible }: any) {


  let labelText = () => {
    if (route === 'place') return 'Explore friends recently added places';
    if (route === 'userProfile') return 'Recently active friends';
    if (route === 'search') return 'See popular cities';
      
  }


  return (
    <View style={styles.listContainer}>
      <Text style={styles.listLabel}>{labelText()}</Text>
      <ScrollView
        style={styles.homeListContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
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
    backgroundColor: colors.backgroundDark,
    marginBottom: 30
  },

  listLabel: {
    fontFamily: fonts.semiBold,
    paddingHorizontal: 10,
    fontSize: 22,
    color: colors.fontLight

  },

  homeListContainer: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 15,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundBright,
  },

  homeListContent: {
    flexDirection: "row",
  },
});

export default HomeList;
