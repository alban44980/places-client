import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

function HomeListItem({ data }: any) {
  return (
    <View style={styles.itemContainer}>
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
    </View>
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
