import React, { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import {
  StyleSheet,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';
import colors from '../../assets/styles/colors';

function ImageContainer() {
  const [image, setImage] = useState<any>(null);

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
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
    height: '25%',
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
