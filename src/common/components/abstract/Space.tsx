import React from 'react';
import {View} from 'react-native';

interface SpaceVerticalProps {
  s: number;
}
const SpaceVertical = ({s}: SpaceVerticalProps) => (
  <View
    style={{
      marginVertical: s,
    }}
  />
);
const SpaceHorizantal = ({s}: SpaceVerticalProps) => (
  <View
    style={{
      marginHorizontal: s,
    }}
  />
);

const Space = {
  V: SpaceVertical,
  H: SpaceHorizantal,
};

export default Space;
