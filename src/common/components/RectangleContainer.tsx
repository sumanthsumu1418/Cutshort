import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RectangleContainer = ({rectContainerStyle}) => {
//   console.log(width, backgroundColor);
  return <View style={[styles.rectangleContainer, rectContainerStyle]}></View>;
};

export default RectangleContainer;

const styles = StyleSheet.create({
  rectangleContainer: {
    width: 12,
    backgroundColor: '#FDD590',
    height: 6,
    borderRadius: 3,
  },
});
