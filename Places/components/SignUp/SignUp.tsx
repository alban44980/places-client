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
import ApiService from '../../ApiService';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import InputField from './InputField';

function SignUp() {
  type userScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<userScreenProp>();
  const { goBack } = navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log('Register User >>>>>>>>>>>', data);
    const registerRes = await ApiService.register(data);
    console.log('Register response>>>>>>>>', registerRes);

    navigation.navigate('login');
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Create an account</Text>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => goBack()}
        >
          <Text style={styles.backButtonLabel}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        {/* Attempt to refactor but stopped due to error questions */}
        {/* <InputField control={control} placeholder={'Username'} name={'user_name'} />
        <InputField control={control} placeholder={'First name'} name={'first_name'} />
        <InputField control={control} placeholder={'Last name'} name={'last_name'} />
        <InputField control={control} placeholder={'Email'} name={'email'} textContentType={"emailAddress"}/>
        <InputField control={control} placeholder={'Username'} name={'user_name'} />
        <InputField control={control} placeholder={'Username'} name={'user_name'} /> */}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.usernameInput}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
              autoCapitalize="none"
            />
          )}
          name="user_name"
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}

        <View style={styles.doubleInputLineContainer}>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.firstNameInput}
                onChangeText={onChange}
                value={value}
                placeholder="First name"
                autoCapitalize="none"
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
                style={styles.lastNameInput}
                onChangeText={onChange}
                value={value}
                placeholder="Last name"
                autoCapitalize="none"
              />
            )}
            name="last_name"
            defaultValue=""
          />
        </View>

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.emailInput}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              textContentType={'emailAddress'}
              autoCapitalize="none"
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
              style={styles.passwordInput}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
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
              message: 'OH FUCKING HELL YOU DID NOT CONFIRM YOUR PASSWORD',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // errors={errors.passwordConfirmation}
              // errorText={errors.passwordConfirmation.message}
              style={styles.passwordInput}
              onChangeText={onChange}
              value={value}
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCapitalize="none"
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
              style={styles.bioInput}
              onChangeText={onChange}
              value={value}
              placeholder="Bio"
            />
          )}
          name="bio"
          defaultValue=""
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.submitButtonContainer}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },

  topContainer: {
    height: '25%',
    backgroundColor: colors.backgroundLight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  text: {
    color: colors.fontDark,
    fontSize: 30,
    fontFamily: fonts.semiBold,
    letterSpacing: 0.25,
  },

  backButtonContainer: {
    position: 'absolute',
    height: 30,
    width: 80,
    backgroundColor: colors.backgroundLight,
    right: 15,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 2,
  },

  backButtonLabel: {
    fontFamily: fonts.semiBold,
    fontSize: 13,
    color: colors.fontDark,
  },

  formContainer: {
    height: '30%',
    alignItems: 'center',
    paddingTop: 30,
  },

  doubleInputLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },

  usernameInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 40,
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  firstNameInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 40,
    width: '40%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  lastNameInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 40,
    width: '55%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  emailInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 40,
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 40,
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bioInput: {
    backgroundColor: colors.backgroundLight,
    marginVertical: 5,
    height: 70,
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  submitButtonContainer: {
    backgroundColor: colors.backgroundLight,
    height: 40,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
});

export default SignUp;
