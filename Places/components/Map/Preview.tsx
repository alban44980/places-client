import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/styles/colors';
import { BlurView } from 'expo-blur';
import fonts from '../../assets/styles/fonts';

function Preview({ currentPlaceReview, setPlaceVisible }: any) {
  return (
    <BlurView intensity={100} style={styles.placePreviewContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: '80%',
            height: '80%',
            borderRadius: 20,
            borderWidth: 1,
          }}
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
            return <Text style={styles.tagsStyle}>#{tag.name}</Text>;
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => {
              setPlaceVisible(true);
            }}
          >
            <Text style={{ fontSize: 15, fontFamily: fonts.medium }}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  placePreviewContainer: {
    flexDirection: 'row',
    height: '100%',
    position: 'absolute',
    bottom: 230,
    zIndex: 2,
    width: '100%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContainer: {
    width: '45%',
    backgroundColor: colors.backgroundLight,
    right: 15,
    top: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    height: '80%',
    borderWidth: 0.25,
  },

  placeName: {
    height: '30%',
    justifyContent: 'center',
  },

  title: {
    color: colors.fontDark,
    fontSize: 18,
    fontFamily: fonts.medium,
  },

  tagsStyle: {
    color: colors.fontDark,
    margin: 2,
    fontFamily: fonts.medium,
    fontSize: 11,
  },

  tagsContainer: {
    height: '25%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: '25%',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  viewButton: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 12,
    backgroundColor: colors.buttonDefault,
  },
});

export default Preview;
