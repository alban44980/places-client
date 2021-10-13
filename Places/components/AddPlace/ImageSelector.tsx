import {StyleSheet, View, Text, Image, Platform, TouchableHighlight} from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../assets/styles/colors';
import * as ImagePicker from 'expo-image-picker'


function ImageSelector() {

  const [image, setImage] = useState<any>(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <TouchableHighlight 
      style={styles.container}
      onPress={pickImage}
    >
      {
        image ? 
          <Image 
            source={{ uri: image }} 
            style={styles.chosenImage} 
            resizeMode='contain'
          />
        : 
          <Image 
            source={require('../../assets/generalIcons/addPhoto.png')} 
            style={styles.addImageIcon} 
            resizeMode='contain'
          />
      }


    </TouchableHighlight>
  );
}

export default ImageSelector;


const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '60%',
    backgroundColor: colors.backgroundMedium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: colors.backgroundDark,
    borderWidth: 2
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
    backgroundColor: 'white'
  },

})