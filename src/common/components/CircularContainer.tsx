// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const RectangleContainer = ({rContainerStyle}) => {
//   //   console.log(width, backgroundColor);
//   return <View style={[styles.rectangleContainer, rectContainerStyle]}></View>;
// };

// export default RectangleContainer;

// const styles = StyleSheet.create({
//   rectangleContainer: {
//     width: 12,
//     backgroundColor: '#FDD590',
//     height: 6,
//     borderRadius: 3,
//   },
// });

import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../Styles/styles';

const CircularContainer = ({circularContainerStyle}) => {
  return (
    <View
      style={[styles.defaultCirContainerStyle, circularContainerStyle]}></View>
  );
};

export default CircularContainer;
