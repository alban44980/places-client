import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import {
  setUserData,
  toggleSearchVisible,
  togglePlaceVisible,
  setPlaceSelected,
} from '../../redux/actions/actions';
import colors from '../../assets/styles/colors';
import { BlurView } from 'expo-blur';
import fonts from '../../assets/styles/fonts';

function HomeListItem({
  data,
  route,
  setPlace,
  setCity,
  setFriend,
  setPlaceVisible,
  placeVisible,
  searchVisible,
  setSearchVisible,
}: any) {
  type userScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<userScreenProp>();

  const placeSelected: any = useSelector(
    (state: RootState) => state.placeSelected
  );

  const handlePress = () => {
    if (route === 'userProfile') {
      setFriend(data);
      navigation.navigate('userProfile', data);
    }

    if (route === 'search') {
      setCity(data.name);
      setSearchVisible(!searchVisible);
    }

    if (route === 'place') {
      setPlace(data);
      setPlaceVisible(!placeVisible);
    }
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image
        style={styles.img}
        source={{
          uri:
            data.img ||
            'https://images.unsplash.com/photo-1634501087922-c01c76ed66d6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        }}
        resizeMode="cover"
      />
      <BlurView intensity={80} style={styles.textContainer}>
        <Text style={styles.title}>
          {route !== 'userProfile' ? data.name : data.first_name}
        </Text>
      </BlurView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 15,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 0.5,
  },

  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  textContainer: {
    height: '30%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: colors.fontLight,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeListItem;
