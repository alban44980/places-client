import {StyleSheet, View, Text, TouchableHighlight, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/styles/colors';
import tags from '../../dummyData/tagsList';


function TagsFilter() {

  // there should be some kind of state for selected --> this is used for rendering color to begin with
  const [selected, setSelected] = useState<String[]>([])
  const tagsList = tags

  const handlePress = (tag: string) => {
    if (!selected.includes(tag)) {
      setSelected((prev) => [...prev, tag])
    }
    if (selected.includes(tag)) {
      setSelected((prev) => [...prev].filter((item) => item !== tag))
    }
  }

  return (
    <View style={styles.tagSectionContainer}>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>

        {
          tagsList.map((tag) => {
            return (
              <TouchableHighlight 
                style={ selected.includes(tag) ?  styles.tagSelectedContainer : styles.tagDefaultContainer}
                onPress={() => handlePress(tag)}
              >
                <Text style={styles.tagText}>#{tag}</Text>
              </TouchableHighlight>
            )
          })
        }

      </ScrollView>
     
    </View>
  );
}

export default TagsFilter;

const styles = StyleSheet.create({
  tagSectionContainer: {
    flex: 1,
    backgroundColor: colors.backgroundMedium,
    alignItems: 'center',
    paddingTop: 20,
  },

  tagDefaultContainer: {
    height: 45,
    width: '60%',
    backgroundColor: colors.backgroundDark,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: colors.backgroundDark,
    borderWidth: 1
  },

  tagSelectedContainer: {
    height: 45,
    width: '60%',
    backgroundColor: colors.accentFun,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: colors.backgroundDark,
    borderWidth: 1
  },

  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.fontLight,
    textAlign: 'center'
  }
  
})