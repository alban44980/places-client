import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import places from '../../dummyData/placesList';
import PlaceDetails from './PlaceDetails';
import PlaceModal from '../PlaceModal/PlaceModal';
import colors from '../../assets/styles/colors';



function PlacesList(props: any) {
  const { handlePress, setPlace, places } = props;




  return (
    <View 
      style={styles.placesListContainer}

    >
      <FlatList
        style={styles.flatListStyle}
        contentContainerStyle={styles.flatListContContStyle}
        data={places}
        horizontal={false}
        renderItem={({ item }) => {
          return (

              <View style={styles.itemElementStyle}>
                <TouchableOpacity
                  style={styles.touchableItemWrapper}
                  onPress={() => {
                    setPlace(item);
                    handlePress()
                  }}
                >
                  <Image source={{ uri: item.img }} style={styles.imageStyle} />
                  <PlaceDetails item={item} />
                </TouchableOpacity>
              </View>


          );
        }}
      />
    </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  placesListContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    paddingTop: 10
  },

  flatListStyle: {
    backgroundColor: colors.backgroundBright,
    width: '90%',
    height: '90%',
    paddingTop: 30,
    borderRadius: 10,
  },

  flatListContContStyle: {
    alignItems: 'center',
  },

  itemElementStyle: {
    height: 170,
    minWidth: '90%',
    maxWidth: '90%',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 10,
  },

  touchableItemWrapper: {
    flex: 1,
  },

  imageStyle: {
    height: '42%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
