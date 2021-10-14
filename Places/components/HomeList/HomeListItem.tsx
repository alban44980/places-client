import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
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

function HomeListItem({ data, route }: any) {
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

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        if (route === 'userProfile') navigation.navigate('userProfile');
        if (route === 'search') {
          dispatch(toggleSearchVisible());
        }
        if (route === 'place') {
          dispatch(setPlaceSelected(data.name));
          dispatch(togglePlaceVisible());
        }
      }}
    >
      {data ? (
        <ImageBackground
          style={styles.img}
          imageStyle={{ borderRadius: 50 }}
          source={{
            uri: `https://${data.image}`,
          }}
        >
          <Text style={styles.title}>{data.name}</Text>
        </ImageBackground>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    width: 80,
    height: 80,
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'red',
  },
});

export default HomeListItem;
