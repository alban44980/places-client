import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';

function BackButton(props: any) {
  const { handlePress } = props;

  const searchVisible: any = useSelector(
    (state: RootState) => state.searchVisible
  );

  return (
    <TouchableHighlight
      onPress={() => handlePress()}
      style={styles.closeButton}
    >
      <Text style={styles.closeButtonText}>Back</Text>
    </TouchableHighlight>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  closeButton: {
    height: '20%',
    width: '22%',
    backgroundColor: colors.buttonDefault,
    borderColor: colors.backgroundDark,
    borderStyle: 'solid',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 61,
    right: 25,
    zIndex: 2,
  },

  closeButtonText: {
    color: colors.fontDark,
    fontFamily: fonts.semiBold,
    fontSize: 14,
    textAlign: 'center',
  },
});
