import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import PlaceModal from "../PlaceModal/PlaceModal";
import FilterModal from "./FilterModal";
import FriendPlacesFilter from "./FriendPlacesFilter";
import PlacesList from "./PlacesList";
import SearchBar from "./SearchBar";
import colors from "../../assets/styles/colors";
import CloseButton from "../PlaceModal/CloseButton";

import fonts from "../../assets/styles/fonts";

function SearchModal({ city, searchVisible, setSearchVisible }: any) {
  //allFriends cties and places
  const friendsCitiesPlaces: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  //extract places from friendsCitiesPlaces reducer
  const placesArray = [];
  for (let friend of friendsCitiesPlaces) {
    for (let cities of friend.Cities) {
      for (let places of cities.Places) {
        places.user = {
          username: friend.user_name,
          first_name: friend.first_name,
          last_name: friend.last_name,
        };
        placesArray.push(places);
      }
    }
  }

  //places currently rendering
  const [placesRendered, setPlacesRendered] = useState<any[]>([...placesArray]);
  const [tagsSelected, setTagsSelected] = useState<any[]>([]);

  //set initial search with selectedPlace if selectedPlace not null
  const [search, setSearch] = useState<String>("");

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);
  // waiting for place interface before declaring below
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const [placeVisible, setPlaceVisible] = useState<Boolean>(false);

  const handlePlacePress = () => {
    setPlaceVisible(!placeVisible);
  };

  const handleClosePress = () => {
    setSearchVisible(!searchVisible);
    // dispatch(toggleSearchVisible());
  };

  // console.log("place visible ==>", placeVisible);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={searchVisible}
      onRequestClose={() => {
        // setSearchVisible(false);
        // dispatch(toggleSearchVisible());
      }}
    >
      <SafeAreaView style={styles.searchScreenContainer}>
        {filterModalVisible && (
          <FilterModal
            filterModalVisible={filterModalVisible}
            setFilterModalVisible={setFilterModalVisible}
            handlePress={handleFilterPress}
            setTagsSelected={setTagsSelected}
            tagsSelected={tagsSelected}
          />
        )}

        {placeVisible && (
          <PlaceModal
            placeVisible={placeVisible}
            setPlaceVisible={setPlaceVisible}
            place={selectedPlace}
          />
        )}

        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Explore Places</Text>
        </View>

        <CloseButton handlePress={handleClosePress} />
        <SearchBar
          handlePress={handleFilterPress}
          search={search}
          setSearch={setSearch}
          setSearchResults={setPlacesRendered}
          data={placesArray}
          city={city}
          tagsSelected={tagsSelected}
        />

        <FriendPlacesFilter
          tagsSelected={tagsSelected}
          setSearchResults={setPlacesRendered}
          friendsList={friendsCitiesPlaces}
        />
        <PlacesList
          handlePress={handlePlacePress}
          setPlace={setSelectedPlace}
          places={placesRendered}
        />
      </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;

const styles = StyleSheet.create({
  searchScreenContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  headerSection: {
    height: "10%",
    width: "100%",
    backgroundColor: colors.backgroundDark,

    justifyContent: "center",
    paddingHorizontal: 30,
  },

  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.fontLight,
  },
});
