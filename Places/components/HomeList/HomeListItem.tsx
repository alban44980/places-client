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

function HomeListItem({ data, route }: any) {
  type userScreenProp = StackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<userScreenProp>();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        if (route === 'userProfile') navigation.navigate('userProfile');
        // if (route === 'search') {
        //   navigation.navigate('search');
        // }
        // if (route === 'place') navigation.navigate('place');
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
