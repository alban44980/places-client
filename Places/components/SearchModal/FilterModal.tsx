import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../../assets/styles/colors";
import TagsFilter from "./TagsFilter";

function FilterModal(props: any) {
  const [selected, setSelected] = useState<String[]>([]);

  const {
    filterModalVisible,
    setFilterModalVisible,
    handlePress,
    setTagsSelected,
  } = props;

  useEffect(() => {
    setTagsSelected(selected);
  }, [selected]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={filterModalVisible}
      onRequestClose={() => {
        setFilterModalVisible(!filterModalVisible);
      }}
    >
      <View style={styles.filterModalContainer}>
        <View style={styles.modalHeaderContainer}>
          <Text style={styles.headerText}>Select Tags</Text>
        </View>

        <View style={styles.tagsListContainer}>
          <TagsFilter selected={selected} setSelected={setSelected} />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setFilterModalVisible(!filterModalVisible)}
            style={styles.acceptButton}
          >
            <Text style={styles.acceptButtonText}>Accept 👍</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default FilterModal;

const styles = StyleSheet.create({
  filterModalContainer: {
    height: "50%",
    width: "80%",
    backgroundColor: colors.backgroundMedium,
    position: "absolute",
    top: "21%",
    alignSelf: "center",
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 10,
    alignItems: "center",
  },

  modalHeaderContainer: {
    height: "15%",
    width: "100%",
    backgroundColor: colors.accentFun,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.fontLight,
  },

  tagsListContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: colors.backgroundDark,
  },

  buttonsContainer: {
    // backgroundColor: colors.backgroundLight,
    width: "70%",
    height: "15%",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
  },

  acceptButton: {
    backgroundColor: colors.backgroundLight,
    justifyContent: "center",
    height: "70%",
    width: "70%",
    borderColor: colors.backgroundDark,
    borderWidth: 1,
    borderRadius: 10,
  },

  acceptButtonText: {
    textAlign: "center",
    color: colors.fontDark,
    fontWeight: "600",
    fontSize: 15,
  },
});
