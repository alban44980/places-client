import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import ApiService from "../../ApiService";
import {
  saveAccessToken,
  saveRefreshToken,
  saveUserFriendsInfo,
} from "../../redux/actions/actions";
import { RootState } from "../../redux/reducers/reducers";

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
      //   Object {
      // "email": "Will@gmail.com",
      // "password": "123456789",
      // }
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
        navigation.navigate("home");
      }
    } catch (e) {}
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
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              textContentType={"emailAddress"}
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
        <Text
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("signup")}
        >
          Create an account
        </Text>

        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  topContainer: {
    height: "30%",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
  formContainer: {
    // backgroundColor: 'red',
    height: "30%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    margin: 5,
    height: "20%",
    width: "85%",
    padding: 10,
  },
  createAccountButton: {
    margin: 5,
  },
  loginButton: {
    backgroundColor: "lightblue",
    height: "20%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Login;
