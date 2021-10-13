import React, { useState } from 'react';
import { StyleSheet, Modal, SafeAreaView } from 'react-native';
import PlaceModal from '../PlaceModal/PlaceModal';
import FilterModal from './FilterModal';
import FriendPlacesFilter from './FriendPlacesFilter';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';
import colors from '../../assets/styles/colors';
import CloseButton from '../PlaceModal/CloseButton';
import places from '../../dummyData/placesList';

function SearchModal(props: any) {
  // this is a placeholder for a redux reducer of all places
  const placesArray = places;

  const [placesRendered, setPlacesRendered] = useState<any[]>([...placesArray]);
  const [search, setSearch] = useState<String>('');

  const { searchVisible, setSearchVisible } = props;
  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);
  const [placeModalVisible, setPlaceModalVisible] = useState<Boolean>(false);

  // waiting for place interface before declaring below
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleFilterPress = () => {
<<<<<<< HEAD
    setFilterModalVisible(!filterModalVisible)
  }
  const handlePlacePress = () => {
    setPlaceModalVisible(!placeModalVisible)
  }
=======
    setFilterModalVisible(!filterModalVisible);
  };

  const handlePlacePress = () => {
    setPlaceModalVisible(!placeModalVisible);
  };

>>>>>>> 9ba9d23ef4f7c27929548aee8e32b35fd9c9bf88
  const handleClosePress = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={searchVisible}
      onRequestClose={() => {
        setSearchVisible(false);
      }}
    >
      <SafeAreaView style={styles.searchScreenContainer}>
        {filterModalVisible && (
          <FilterModal
            filterModalVisible={filterModalVisible}
            setFilterModalVisible={setFilterModalVisible}
            handlePress={handleFilterPress}
          />
        )}

        {placeModalVisible && (
          <PlaceModal
            placeModalVisible={placeModalVisible}
            setPlaceModalVisible={setPlaceModalVisible}
            handlePress={handlePlacePress}
            place={selectedPlace}
          />
        )}

        <CloseButton handlePress={handleClosePress} />
        <SearchBar
          handlePress={handleFilterPress}
          search={search}
          setSearch={setSearch}
          setSearchResults={setPlacesRendered}
          data={placesArray}
        />

        <FriendPlacesFilter />
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
});
