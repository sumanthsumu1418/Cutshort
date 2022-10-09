import {Platform} from 'react-native';
const isAndroid = () => {
  return Platform.OS === 'android';
};

export const deviceInfoUtil = {
  isAndroid,
};
