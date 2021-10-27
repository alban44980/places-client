import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import PlaceModal from '../PlaceModal/PlaceModal';
import PlacesList from '../SearchModal/PlacesList';
import BackButton from './BackButton';

const UserCityPlacesModal = ({
  setCityPlacesVisible,
  cityPlacesVisible,
  selectedCityInfo,
}: any) => {
  const [placeVisible, setPlaceVisible] = useState<Boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleBackPress = () => {
    setCityPlacesVisible(!cityPlacesVisible);
  };

  const handlePlacePress = () => {
    setPlaceVisible(!placeVisible);
  };

  return (
    <Modal>
      {placeVisible && (
        <PlaceModal
          placeVisible={placeVisible}
          setPlaceVisible={setPlaceVisible}
          place={selectedPlace}
        />
      )}

      <View style={styles.headerSection}>
        <BackButton handlePress={handleBackPress} />
        <Text style={styles.headerText}>{selectedCityInfo.Places[0].city}</Text>
      </View>

      <PlacesList
        places={selectedCityInfo.Places}
        handlePress={handlePlacePress}
        setPlace={setSelectedPlace}
      />
    </Modal>
  );
};

export default UserCityPlacesModal;

const styles = StyleSheet.create({
  headerSection: {
    height: '23%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: 30,
    top: 45,
  },
});
