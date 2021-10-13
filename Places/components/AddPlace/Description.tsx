import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';




function Description() {



  return (
    <View style={styles.container}>
      <Text>Hello</Text>

    </View>
  );
}

export default Description;


const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '90%',
    backgroundColor: colors.backgroundDark
  }
  
})