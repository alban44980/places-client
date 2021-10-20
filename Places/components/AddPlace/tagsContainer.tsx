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




function TagsContainer({ formTags, setFormTags }: any) {
  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);
  const [search, setSearch] = useState<String>('');

  return (
    <View style={styles.container}>
      {filterModalVisible && (
        // <View style={styles.opacityForModalOpen}>
          <FilterModal
            filterModalVisible={filterModalVisible}
            setFilterModalVisible={setFilterModalVisible}
            handlePress={handleFilterPress}
            formTags={formTags}
            setFormTags={setFormTags}
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
    height: '12%',
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  opacityForModalOpen: {
    height: 1000,
    width: 800,
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.85,
    left: -50,
  },

  filterButtonContainer: {
    backgroundColor: colors.backgroundDark,
    height: '70%',
    width: '80%',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5
  },

  filterText: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.fontLight,
    fontFamily: fonts.semiBold,
    letterSpacing: .75
  },

});

export default TagsContainer;
