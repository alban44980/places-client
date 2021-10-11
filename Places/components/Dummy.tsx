import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/reducers';

function Dummy() {
  const userInfo: any = useSelector((state: RootState) => state.userInfo);

  function handleClick() {
    alert(userInfo);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>THIS IS A DUMMY COMPONENT </Text>
      <Button onPress={handleClick} title="click meee" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fontStyle: {
    color: 'white',
  },
});

export default Dummy;
