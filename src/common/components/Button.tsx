import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {layoutUtil} from '../../common/helpers/layoutUtil';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const AppButton = ({
  onPress,
  title,
  backgroundColor,
  buttonContainer,
  textStyle,
  borderStyle,
}) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        backgroundColor && {backgroundColor},
        buttonContainer,
        borderStyle,
      ]}>
      <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    // paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    width: layoutUtil.width * 0.386,
    height: layoutUtil.height * 0.0615,
  },
  appButtonText: {
    fontSize: 18,
    color: '#000',
    // fontWeight: 'bold',
    // alignSelf: 'center',
    // textTransform: 'uppercase',
  },
});

export default AppButton;
