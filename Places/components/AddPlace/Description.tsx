import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/styles/colors';




function Description() {

  const [input, setInput] = useState<String>('')


  const handleInput = (input: string) => {
    setInput(input)
  }


  return (

        <View style={styles.descriptionContainer}>

          <TextInput 
            style={styles.inputField}
            placeholder='Enter description'
            value={input}
            onChangeText={(input: string) => handleInput(input)}
          />

        </View>

  );
}

export default Description;


const styles = StyleSheet.create({

  descriptionContainer: {
    flex: 1,
    backgroundColor: colors.backgroundMedium,
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 22
  },

  inputField: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.backgroundLight,
  },
  
})