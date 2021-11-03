import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import PlaceDetails from './PlaceDetails';
import colors from '../../assets/styles/colors';

function PlacesList(props: any) {
  const { handlePress, setPlace, places } = props;

  return (
    <View style={styles.placesListContainer}>
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
                  handlePress();
                }}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.img }} style={styles.imageStyle} />
                </View>

                <View style={styles.opacityLayer}></View>

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
    width: '100%',
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 40,
    borderTopWidth: 1,
  },

  flatListStyle: {
    width: '90%',
    flex: 1,
    paddingTop: 30,
  },

  flatListContContStyle: {
    alignItems: 'center',
    paddingBottom: 50,
  },

  itemElementStyle: {
    height: 150,
    minWidth: '90%',
    maxWidth: '90%',
    borderWidth: 1,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: colors.backgroundDark,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },

  touchableItemWrapper: {
    flex: 1,
    justifyContent: 'center',
  },

  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 10,
  },

  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  opacityLayer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.backgroundLight,
    opacity: 0,
  },
});
