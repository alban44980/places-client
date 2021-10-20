
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


const KeyboardAvoidWrap = ({children}) => {

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={{paddingVertical:2}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
  },
});

export default KeyboardAvoidWrap;