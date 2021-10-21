import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

function SearchBar(props: any) {
  // on search should also have a drop down list of suggested cities that match the current search

  const {
    handlePress,
    setSearch,
    setSearchResults,
    data, //list of all user's friends' places
    search,
    city,
    tagsSelected,
  } = props;

  const [textState, setTextState] = useState<string>('');

  useEffect(() => {
    if (city) {
      setSearch(city);
    }
  }, [city]);

  const searchFilter = (text: string, tags: string[]) => {
    setTextState(text);

    if (text) {
      const matchingPlaces = data.filter((place: any) => {
        const itemData = place.city
          ? place.city.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        if (itemData.indexOf(textData) > -1) {
          //if tags list is empty, the run matching text search
          if (tags.length < 1) return true;

          //loop through the current place's tags
          for (let tag of place.Tags) {
            //if current place's tag is in the tags list, return true
            if (tags.includes(tag.name)) return true;
          }
        }
        return false;
      });
      setSearchResults(matchingPlaces);
      setSearch(text);
    } else {
      setSearchResults(data);
      setSearch(text);
    }
  };

  useEffect(() => {
    searchFilter(textState, tagsSelected);
  }, [tagsSelected]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        value={search}
        placeholder="Where are you going?"
        placeholderTextColor={colors.backgroundDark}
        onChangeText={(text) => searchFilter(text, tagsSelected)}
      />
      <TouchableHighlight
        style={styles.filterButtonContainer}
        onPress={handlePress}
      >
        <Image
          style={styles.filterIcon}
          source={require('./../../assets/generalIcons/filter.png')}
        />
      </TouchableHighlight>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.backgroundLight,
    width: '100%',
    height: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchBar: {
    backgroundColor: 'white',
    height: '70%',
    width: '65%',
    paddingLeft: '3%',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    color: colors.fontDark,
    // marginLeft: 10,
  },

  filterButtonContainer: {
    backgroundColor: colors.buttonDefault,
    height: '70%',
    width: '13%',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    alignItems: 'center',
  },

  filterIcon: {
    height: 32,
    width: 30,
  },
});
