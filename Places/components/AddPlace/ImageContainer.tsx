//@ts-nocheck
import React, { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';
import colors from '../../assets/styles/colors';

function ImageContainer({ image, setImage }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true, //we need this to format to Cloudinary
    });

    if (!result.cancelled) {
      // setImage(result.uri);
      let base64Img = `data:image/jpg;base64,${result.base64}`; //    //***IMPORTANT*** This step is necessary.  It converts image from //file path format that imagePicker creates, into a form that cloudinary //requires.
      let data = {
        file: base64Img,
        upload_preset: 'place_imgs',
      };
      fetch('https://api.cloudinary.com/v1_1/dgdnva4a7/upload', {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
      })
        .then(async (r) => {
          let data = await r.json();
          console.log('GETTING A RESPONSE FROM CLOUDINARY yiiiii');
          console.log('URL SENT BACK FROM CLOUDINARY', data.url);
          console.log('TYPE OF URL SENT BACK', typeof data.url);
          setImage(data.url);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <TouchableHighlight style={styles.container} onPress={pickImage}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.chosenImage}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={require('../../assets/generalIcons/addPhoto.png')}
          style={styles.addImageIcon}
          resizeMode="contain"
        />
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '18%',
    width: '60%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: colors.backgroundDark,
    borderWidth: 2,
    marginBottom: 20,
  },
  addImageIcon: {
    height: '80%',
    width: '80%',
    backgroundColor: colors.backgroundMedium,
  },

  chosenImage: {
    height: 150,
    width: '70%',
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});

export default ImageContainer;
