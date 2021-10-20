import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../../assets/styles/colors';

function Preview({ currentPlaceReview, setPlaceVisible }: any) {
  return (
    <View style={styles.placePreviewContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: '80%', height: '80%', borderRadius: 20 }}
          source={{
            uri: currentPlaceReview.img,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.placeName}>
          <Text style={styles.title}>{currentPlaceReview.name}</Text>
        </View>
        <View style={styles.tagsContainer}>
          {currentPlaceReview.Tags.map((tag: any) => {
            return (
              <Text style={{ color: colors.fontLight, margin: 2 }}>
                #{tag.name}
              </Text>
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => {
              setPlaceVisible(true);
            }}
          >
            <Text style={{ fontSize: 20 }}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  placePreviewContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  imageContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '50%',
  },
  placeName: {
    height: '30%',
    justifyContent: 'center',
    paddingLeft: 60,
  },
  title: {
    color: colors.fontLight,
    fontSize: 18,
  },
  tagsContainer: {
    height: '25%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  viewButton: {
    height: '70%',
    width: '70%',
    backgroundColor: colors.backgroundBright,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 30,
  },
});

export default Preview;
