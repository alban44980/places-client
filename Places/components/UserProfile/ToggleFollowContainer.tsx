import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Switch } from 'react-native';

function ToggleFollowContainer() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.followContainer}>
      <View style={styles.switchContainer}>
        <Switch
          style={styles.switchButton}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.textContainer}>
        {isEnabled ? (
          <Text style={styles.textContent}>Following</Text>
        ) : (
          <Text style={styles.textContent}>Follow</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  followContainer: {
    // backgroundColor: 'red',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switchContainer: {
    // backgroundColor: 'green',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButton: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  textContainer: {
    // backgroundColor: 'yellow',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 30,
  },
});

export default ToggleFollowContainer;
