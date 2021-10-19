import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import colors from "../../assets/styles/colors";
import tags from "../../dummyData/tagsList";

function TagsFilter({ selected, setSelected, formTags, setFormTags }: any) {
  const tagsList = tags;

  //on press the selected tag state  inside the FilterModal component will be updated
  const handlePress = (tag: string) => {
    //if tag not already selected, add it to selected list
    if (!selected.includes(tag)) {
      if (setSelected) setSelected((prev: any) => [...prev, tag]);
      if (setFormTags) setFormTags((prev: any) => [...prev, { tag_name: tag }]);
    }
    //remove tag from selected list if already selected
    if (selected.includes(tag)) {
      if (setSelected)
        setSelected((prev: any) => [...prev].filter((item) => item !== tag));
      if (setFormTags)
        setFormTags((prev: any) =>
          [...prev].filter((item) => item !== { tag_name: tag })
        );
    }
  };

  return (
    <View style={styles.tagSectionContainer}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {tagsList.map((tag) => {
          return (
            <TouchableHighlight
              key={tag.tag_name}
              style={
                selected.includes(tag.tag_name)
                  ? styles.tagSelectedContainer
                  : styles.tagDefaultContainer
              }
              onPress={() => handlePress(tag.tag_name)}
            >
              <Text style={styles.tagText}>#{tag.tag_name}</Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TagsFilter;

const styles = StyleSheet.create({
  tagSectionContainer: {
    flex: 1,
    backgroundColor: colors.backgroundMedium,
    alignItems: "center",
    paddingTop: 20,
  },

  tagDefaultContainer: {
    height: 45,
    width: "60%",
    backgroundColor: colors.backgroundDark,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  tagSelectedContainer: {
    height: 45,
    width: "60%",
    backgroundColor: colors.accentFun,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: colors.backgroundDark,
    borderWidth: 1,
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.fontLight,
    textAlign: "center",
  },
});
