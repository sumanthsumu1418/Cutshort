import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/styles';
import Space from '../../common/components/abstract/Space';
import {layoutUtil} from '../../common/helpers/layoutUtil';
import {images} from '../../common/assets/images/index';
import {RootStackParamsList} from '../navigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import currency from '../../constants/currency.json';
import AppButton from '../../common/components/Button';
import {Colors} from '../../Theme/Variables';
import GoBack from '../../components/GoBack';
import CircularContainer from '../../common/components/CircularContainer';
import Input from '../../common/components/Input';

const width = layoutUtil.width;
const height = layoutUtil.height;

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Landing'>;
}

const RequestMoney = ({navigation}: Props) => {
  const [value, setValue] = useState('');

  const goBack = () => {
    navigation.navigate('Home');
  };
  const onChangeText = text => {
    setValue(text);
  };
  const HeaderView = () => {
    return (
      <View style={styles.SendMoneyHeaderContainer}>
        <View style={{flex: 2, marginTop: height * 0.035}}>
          <GoBack goBack={goBack} />
        </View>

        <View style={{flex: 8}}>
          <View style={{flex: 1}}>
            <Input
              onChangeText={onChangeText}
              iconPosition={undefined}
              icon={undefined}
              style={styles.inputStyle}
              value={value}
              label={undefined}
              error={undefined}
            />
          </View>
        </View>
        {/* <View style={{flex: 1}}></View> */}
      </View>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <View
        style={{
          marginVertical: height * 0.05,
          marginHorizontal: width * 0.04,
        }}>
        <HeaderView />
      </View>
    </View>
  );
};

export default RequestMoney;
