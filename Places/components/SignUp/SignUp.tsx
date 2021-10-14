import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
function SignUp() {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>MY PLACES</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="First name"></TextInput>
        <TextInput style={styles.input} placeholder="Last name"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
        ></TextInput>
        <TouchableOpacity style={styles.loginButton}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  topContainer: {
    height: '30%',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  formContainer: {
    // backgroundColor: 'red',
    height: '30%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    margin: 5,
    height: '20%',
    width: '85%',
    padding: 10,
  },

  loginButton: {
    backgroundColor: 'lightblue',
    height: '20%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default SignUp;
