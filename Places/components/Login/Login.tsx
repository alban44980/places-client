import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import ApiService from '../../ApiService';
import {
  saveAccessToken,
  saveRefreshToken,
  saveUserFriendsInfo,
} from '../../redux/actions/actions';
import { RootState } from '../../redux/reducers/reducers';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type userScreenProp = StackNavigationProp<RootStackParamList>;

function Login() {
  const navigation = useNavigation<userScreenProp>();

  const accessToken: any = useSelector((state: RootState) => state.accessToken);
  const refreshToken: any = useSelector(
    (state: RootState) => state.refreshToken
  );
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const tokens: any = await ApiService.login(data);
      //getFriendsCityPlaces apicall below
      if (tokens.accessToken && tokens.refreshToken) {
        const friendsInfo = await ApiService.getFriendsCitesPlace(
          tokens.refreshToken,
          tokens.accessToken
        );

        dispatch(saveUserFriendsInfo(friendsInfo));
        dispatch(saveAccessToken(tokens.accessToken));
        dispatch(saveRefreshToken(tokens.refreshToken));
        navigation.navigate('home');
      }
    } catch (e) {}
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>MY PLACES</Text>
      </View>
      <View style={styles.formContainer}>
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
              style={styles.input}
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
        <TouchableWithoutFeedback
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('signup')}
        >
          <Text style={styles.createAccountButtonLabel}>
            {' '}
            Create an account{' '}
          </Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: colors.fontLight }}>Login</Text>
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
    height: '40%',
    backgroundColor: colors.backgroundLight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  headerText: {
    color: colors.fontDark,
    fontSize: 40,
    fontFamily: fonts.medium,
    letterSpacing: 1,
  },

  formContainer: {
    height: '40%',
    alignItems: 'center',
    paddingTop: 30,
  },

  input: {
    backgroundColor: colors.formInputBackgroundLight,
    margin: 5,
    height: '16%',
    width: '75%',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
  },

  createAccountButtonLabel: {
    fontFamily: fonts.regular,
    color: colors.fontDark,
    marginVertical: 15,
  },

  loginButtonContainer: {
    borderWidth: 1,
    borderRadius: 12,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: colors.buttonDefault,
  },
});

export default Login;
