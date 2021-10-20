import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { RootState } from '../../redux/reducers/reducers';
import { BlurView } from 'expo-blur';

function UserPlaces({
  citiesPlaces,
  setCityPlacesVisible,
  cityPlacesVisible,
  setSelectedCityInfo,
}: any) {
  const userFriendInfo: any = useSelector(
    (state: RootState) => state.userFriendInfo
  );

  const handlePress = (info: any) => {
    setSelectedCityInfo(info);
    setCityPlacesVisible(!cityPlacesVisible);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item)}
    >
      <Image
        style={styles.img}
        source={{
          uri: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        }}
        resizeMode="cover"
      />
      <BlurView intensity={80} style={styles.blurViewStyle}>
        <Text style={styles.cityName}>{item.name}</Text>
        {item.Places.length === 1 ? (
          <Text style={styles.numPlacesText}>{item.Places.length} Place</Text>
        ) : (
          <Text style={styles.numPlacesText}>{item.Places.length} Places</Text>
        )}
      </BlurView>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={citiesPlaces}
      renderItem={renderItem}
      style={styles.userPlacesContainer}
      contentContainerStyle={styles.userPlacesContentContainer}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  userPlacesContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    paddingTop: 20,
    borderTopWidth: 0.5,
  },

  userPlacesContentContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 18,
  },

  itemContainer: {
    height: 150,
    width: 150,
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.backgroundLight,
    borderRadius: 5,
  },

  blurViewStyle: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 5,
    borderWidth: 0.5,
  },

  cityName: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    letterSpacing: 0.6,
  },

  numPlacesText: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: 'white',
  },
});

export default UserPlaces;
