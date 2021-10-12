import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ListViewBase,
  ImageBackground,
} from 'react-native';
import FriendPlacesFilter from '../SearchModal/FriendPlacesFilter';

function HomeListItem(props: any) {
  // let image = require(friend.profilePicture);

  return (
    <View style={styles.itemContainer}>
      {props.friend.profilePicture ? (
        <ImageBackground
          style={styles.img}
          imageStyle={{ borderRadius: 20 }}
          source={{
            uri: `https://${props.friend.profilePicture}`,
          }}
          // resizeMode="cover"
        >
          <Text>{props.friend.name}</Text>
        </ImageBackground>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // backgroundColor: 'black',
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
});

export default HomeListItem;
