import React, { useState } from 'react';
import { StyleSheet, Modal, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import PlaceModal from '../PlaceModal/PlaceModal';
import FilterModal from './FilterModal';
import FriendPlacesFilter from './FriendPlacesFilter';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';
import colors from '../../assets/styles/colors';
import CloseButton from '../PlaceModal/CloseButton';
import places from '../../dummyData/placesList';
import { toggleSearchVisible } from '../../redux/actions/actions';

function SearchModal() {
  // this is a placeholder for a redux reducer of all places
  const placesArray = places;

  const [placesRendered, setPlacesRendered] = useState<any[]>([...placesArray]);
  const [search, setSearch] = useState<String>('');
  const [filterModalVisible, setFilterModalVisible] = useState<Boolean>(false);
  const [placeModalVisible, setPlaceModalVisible] = useState<Boolean>(false);
  // waiting for place interface before declaring below
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  //Redux
  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );
  const dispatch = useDispatch();

  const handleFilterPress = () => {
    setFilterModalVisible(!filterModalVisible);
  };
  const handlePlacePress = () => {
    setPlaceModalVisible(!placeModalVisible);
  };
  const handleClosePress = () => {
    // setSearchVisible(!searchVisible);
    dispatch(toggleSearchVisible());
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={searchVisible}
      onRequestClose={() => {
        // setSearchVisible(false);
        dispatch(toggleSearchVisible());
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
