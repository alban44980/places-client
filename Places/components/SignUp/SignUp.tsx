import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useForm, Controller } from 'react-hook-form';
import apiService from '../../ApiService';

function SignUp() {
  type userScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<userScreenProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    await apiService.register(data);
    navigation.navigate('login');
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>MY PLACES</Text>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
            />
          )}
          name="user_name"
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="First name"
            />
          )}
          name="first_name"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Last name"
            />
          )}
          name="last_name"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              textContentType={'emailAddress'}
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
          name="password"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: {
              value: true,
              message: 'OH NOR YOU DID NOT CONFIRM YOUR PASSWORD',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // errors={errors.passwordConfirmation}
              // errorText={errors.passwordConfirmation.message}
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          )}
          name="passwordConfirmation"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // errors={errors.passwordConfirmation}
              // errorText={errors.passwordConfirmation.message}
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Bio"
            />
          )}
          name="bio"
          defaultValue=""
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
