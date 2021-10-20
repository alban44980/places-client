import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import { Controller } from "react-hook-form";
import colors from '../../assets/styles/colors';




function InputField(props: any) {

  const {control, placeholder, name, textContentType} = props

  return (
    <View style={styles.inputFieldContainer}>
      <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputField}
                onChangeText={onChange}
                value={value}
                placeholder= {placeholder}
                autoCapitalize="none"
                textContentType={textContentType? textContentType: null}
              />
            )}
            name= {name}
            defaultValue=""
      />
    </View>
  );
}

export default InputField;



const styles = StyleSheet.create({
  inputFieldContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputField: {
    backgroundColor: colors.backgroundLight,
    margin: 5,
    height: 40,
    width: "75%",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})