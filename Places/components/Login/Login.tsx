import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type userScreenProp = StackNavigationProp<RootStackParamList, 'userProfile'>;

function Login() {
  const navigation = useNavigation<userScreenProp>();

  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>MY PLACES</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="email"></TextInput>
        <TextInput style={styles.input} placeholder="password"></TextInput>
        <Text
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('signup')}
        >
          Create an account
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text>LOGIN</Text>
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
  createAccountButton: {
    margin: 5,
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

export default Login;
