import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import PlaceModal from "../PlaceModal/PlaceModal";
import PlacesList from "../SearchModal/PlacesList";
import BackButton from "./BackButton";

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

      <BackButton handlePress={handleBackPress} />
      <Text>{selectedCityInfo.Places[0].city}</Text>
      <PlacesList
        places={selectedCityInfo.Places}
        handlePress={handlePlacePress}
        setPlace={setSelectedPlace}
      />
    </Modal>
  );
};

export default UserCityPlacesModal;
