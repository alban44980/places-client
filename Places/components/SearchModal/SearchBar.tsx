import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import FilterModal from "./FilterModal";
import colors from "../../assets/styles/colors";
import places from "../../dummyData/placesList";

function SearchBar(props: any) {
  // on search should also have a drop down list of suggested cities that match the current search

  const {
    handlePress,
    setSearch,
    setSearchResults,
    data, //list of all user's friends' places
    search,
    city,
    tagsSelected,
  } = props;

  useEffect(() => {
    if (city) {
      setSearch(city);
    }
  }, [city]);

  const searchFilter = (text: String, tags?: string[]) => {
    if (text) {
      const matchingPlaces = data.filter((place: any) => {
        const itemData = place.city
          ? place.city.toUpperCase()
          : "".toUpperCase();
        console.log("ItemDAta >>>>>>>", itemData);
        console.log("place TAg INCLUDE>>>>>", place.Tags[0].name);
        const textData = text.toUpperCase();

        if (itemData.indexOf(textData)) {
          for (let tag of place.Tags) {
            console.log(tag);
          }
        }
        // console.log("INDEX OF >>>>>>>>>>>>", itemData.indexOf(textData) > -1);
        return itemData.indexOf(textData) > -1;
      });
      setSearchResults(matchingPlaces);
      setSearch(text);
    } else {
      setSearchResults(data);
      setSearch(text);
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        value={search}
        placeholder="Where are you going?"
        onChangeText={(text) => searchFilter(text, tagsSelected)}
      />
      <TouchableHighlight
        style={styles.filterButtonContainer}
        onPress={handlePress}
      >
        <Text style={styles.filterText}>Filter</Text>
      </TouchableHighlight>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.backgroundDark,
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  searchBar: {
    backgroundColor: colors.backgroundLight,
    height: "70%",
    width: "65%",
    paddingLeft: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  filterButtonContainer: {
    backgroundColor: colors.accentFun,
    height: "70%",
    width: "15%",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  filterText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.fontDark,
    fontWeight: "700",
  },
});
