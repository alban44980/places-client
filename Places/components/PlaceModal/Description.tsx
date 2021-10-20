import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

function Description(props: any) {
  const { place } = props;
  return (
    <View style={styles.descriptionContainer}>
      <ScrollView>
        <Text style={styles.descriptionText}>{place.description}</Text>
      </ScrollView>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    height: '26%',
    backgroundColor: colors.backgroundLight,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 15,
  },

  descriptionText: {
    fontSize: 13.5,
    lineHeight: 27,
    overflow: 'hidden',
    color: colors.fontDark,
    fontFamily: fonts.regular,
  },
});
