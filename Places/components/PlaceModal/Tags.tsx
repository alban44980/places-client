import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

function Tags(props: any) {
  // there should be some kind of state for selected --> this is used for rendering color to begin with

  // for now this is the same tags list but in reality it will be the tags associated with a place or
  // unique tags associated with a collection of places
  const { tags } = props;
  return (
    <View style={styles.tagSectionContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tags.map((tag: any) => {
          return (
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>#{tag.name ? tag.name : tag}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Tags;

const styles = StyleSheet.create({
  tagSectionContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    overflow: 'scroll',
    borderRadius: 5,
  },

  tagContainer: {
    height: '100%',
    minWidth: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  tagText: {
    fontSize: 10,
    fontFamily: fonts.regular,
    color: colors.fontLight,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
});
