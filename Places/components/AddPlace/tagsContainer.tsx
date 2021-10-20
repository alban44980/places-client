<<<<<<< HEAD
import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import colors from "../../assets/styles/colors";
import FilterModal from "../SearchModal/FilterModal";
=======
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import FilterModal from '../SearchModal/FilterModal';
>>>>>>> origin/keyboardAvoiding




function TagsContainer({ formTags, setFormTags }: any) {
  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);

  return (
    <View style={styles.container}>
      {filterModalVisible && (
        // <View style={styles.opacityForModalOpen}>
          <FilterModal
            filterModalVisible={filterModalVisible}
            setFilterModalVisible={setFilterModalVisible}
            handlePress={handleFilterPress}
            tagsSelected={formTags}
            setTagsSelected={setFormTags}
          />
        // </View>
      )}

      <TouchableHighlight
        style={styles.filterButtonContainer}
        onPress={handleFilterPress}
      >
        <Text style={styles.filterText}>Select tags #</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    height: "10%",
    width: "80%",
    backgroundColor: colors.backgroundLight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
=======
    height: '12%',
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
>>>>>>> origin/keyboardAvoiding
  },

  opacityForModalOpen: {
    height: 1000,
    width: 800,
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.85,
    left: -50,
  },

<<<<<<< HEAD
  placeNameInputContainer: {
    height: "50%",
    width: "40%",
    backgroundColor: colors.backgroundMedium,
  },

  searchBar: {
    backgroundColor: colors.backgroundLight,
    height: "70%",
    width: "65%",
    paddingLeft: "3%",
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  filterButtonContainer: {
    backgroundColor: colors.backgroundDark,
    height: "70%",
    width: "20%",
    justifyContent: "center",
=======
  filterButtonContainer: {
    backgroundColor: colors.backgroundDark,
    height: '70%',
    width: '80%',
    justifyContent: 'center',
>>>>>>> origin/keyboardAvoiding
    borderRadius: 10,
    marginTop: 5
  },

  filterText: {
<<<<<<< HEAD
    fontSize: 12,
    textAlign: "center",
    color: colors.fontLight,
    fontWeight: "700",
=======
    fontSize: 15,
    textAlign: 'center',
    color: colors.fontLight,
    fontFamily: fonts.semiBold,
    letterSpacing: .75
>>>>>>> origin/keyboardAvoiding
  },

});

export default TagsContainer;
