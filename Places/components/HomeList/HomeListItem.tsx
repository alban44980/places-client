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

function HomeListItem({ data, route, setPlace, setCity, setFriend }: any) {


  type userScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<userScreenProp>();

  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );
  const placeVisible: any = useSelector(
    (state: RootState) => state.placeVisible
  );
  const placeSelected: any = useSelector(
    (state: RootState) => state.placeSelected
  );


  const handlePress = () => {
    if (route === 'userProfile') {
      setFriend(data)
      navigation.navigate('userProfile', data)
    };

    if (route === 'search') {
      setCity(data.name)
      dispatch(toggleSearchVisible());
    };
    
    if (route === 'place') {
      setPlace(data);
      alert(JSON.stringify(data))
      dispatch(togglePlaceVisible());
    };
  }

  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress} >
        <Image style={styles.img} source={{ uri: data.img}} resizeMode='cover' />
        <View style={styles.textContainer}></View>
        <Text style={styles.title}>{route !== 'userProfile' ? data.name : data.first_name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 15,
    width: 80,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },

  img: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  textContainer: {
    backgroundColor: colors.backgroundDark,
    height: '100%',
    width: '100%',
    opacity: .35,
    position: 'absolute',
  },

  title: {
    color: colors.fontLight,
    textAlign: 'center',
    fontWeight: '700'
  },
});

export default HomeListItem;