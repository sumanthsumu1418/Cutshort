import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Space from '../common/components/abstract/Space';
import styles from '../Styles/styles';
import {images} from '../common/assets/images';

const GoBack = ({goBack}) => {
  //   const goBack = () => {
  //     navigation.navigate('Home');
  //   };
  return (
    <View>
      <TouchableOpacity
        onPress={goBack}
        style={{flexDirection: 'row', marginTop: 2}}>
        <Image style={{width: 10, height: 16}} source={images.backIcon} />
        <Space.H s={5} />
        <Text style={styles.backTextStyle}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;
