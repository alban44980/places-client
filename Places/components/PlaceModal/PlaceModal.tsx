import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import CloseButton from './CloseButton';
import PlaceImage from './PlaceImage';
import HeaderSection from './HeaderSection';
import DetailsBar from './DetailsBar';
import Description from './Description';
import Tags from './Tags';
import colors from '../../assets/styles/colors';
import { BlurView } from 'expo-blur';

function PlaceModal(props: any) {
  const { place, setPlaceVisible, placeVisible } = props;

  const handlePress = () => {
    setPlaceVisible(!placeVisible);
  };

  return (
    <Modal>
      <SafeAreaView style={styles.modalSAVContainer}>
        <CloseButton handlePress={handlePress} />
        <PlaceImage place={place} />
        <BlurView intensity={80} style={styles.blurView}>
          <HeaderSection place={place} />
          <DetailsBar place={place} />
          <View style={styles.tagContainer}>
            <Tags tags={place.Tags} />
          </View>
        </BlurView>
        <Description place={place} />
      </SafeAreaView>
    </Modal>
  );
}

export default PlaceModal;

const styles = StyleSheet.create({
  modalSAVContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
  },

  blurView: {
    position: 'absolute',
    top: 405,
    height: '20%',
    width: '90%',
    alignItems: 'center',
  },

  tagContainer: {
    height: '15%',
    width: '90%',
    marginBottom: 15,
  },
});
