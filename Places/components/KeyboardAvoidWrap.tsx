
import React from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageBackground,
  Dimensions,ScrollView,TouchableOpacity
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('window').width;


const KeyboardAvoidWrap = ({children}: any) => {

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.container}>
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <ScrollView style={styles.scrollView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.TWFStyle}>
              { children }
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%', 
    alignItems: 'center'
  },

  safeAreaViewStyle: {
    flex: 1,
    height: '100%',
    width: '90%',
  },

  scrollView: {
    flex: 1
  },

  TWFStyle: {
    flex: 1,
  }
});

export default KeyboardAvoidWrap;