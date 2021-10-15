import React, { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native';
import colors from '../../assets/styles/colors';
import FilterModal from '../SearchModal/FilterModal';

function TagsContainer() {
  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);
  const [search, setSearch] = useState<String>('');

  return (
    <View style={styles.container}>
      {filterModalVisible && (
        <View style={styles.opacityForModalOpen}>
          <FilterModal
            filterModalVisible={filterModalVisible}
            setFilterModalVisible={setFilterModalVisible}
            handlePress={handleFilterPress}
          />
        </View>
      )}

      <TouchableHighlight
        style={styles.filterButtonContainer}
        onPress={handleFilterPress}
      >
        <Text style={styles.filterText}>Tags</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '80%',
    backgroundColor: colors.backgroundLight,
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

  placeNameInputContainer: {
    height: '50%',
    width: '40%',
    backgroundColor: colors.backgroundMedium,
  },

  searchBar: {
    backgroundColor: colors.backgroundLight,
    height: '70%',
    width: '65%',
    paddingLeft: '3%',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  filterButtonContainer: {
    backgroundColor: colors.backgroundDark,
    height: '70%',
    width: '20%',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  filterText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.fontLight,
    fontWeight: '700',
  },
});

export default TagsContainer;
