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
import RectangleContainer from '../../common/components/RectangleContainer';
import FastImage from 'react-native-fast-image';

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
      </View>
    );
  };
  const CircularContainerView = () => {
    return (
      <>
        <CircularContainer
          circularContainerStyle={{
            ...styles.defaultCirContainerStyle,
            width: width,
            height: width,
            borderRadius: width * 0.5,
            top: -0.05,
            backgroundColor: Colors.homeBG,
            borderColor: '#0D164B',
            borderWidth: 1,
          }}
        />
        <CircularContainer
          circularContainerStyle={{
            ...styles.defaultCirContainerStyle,
            width: width * 0.76,
            height: width * 0.76,
            borderRadius: width * 0.353,
            top: height * 0.051,
            backgroundColor: Colors.homeBG,
            borderColor: '#0D164B',
            borderWidth: 1,
          }}
        />
        <CircularContainer
          circularContainerStyle={{
            ...styles.defaultCirContainerStyle,
            width: width * 0.493,
            height: width * 0.493,
            borderRadius: width * 0.24515,
            top: height * 0.112,
            backgroundColor: Colors.homeBG,
            borderColor: '#0D164B',
            borderWidth: 1,
          }}
        />
      </>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <View style={{flex: 0.625}}>
        <View
          style={{
            marginTop: height * 0.05,
            marginBottom: height * 0.025,
            marginHorizontal: width * 0.04,
          }}>
          <HeaderView />
        </View>
        <View style={{alignItems: 'center'}}>
          <CircularContainerView />
        </View>
      </View>
      {/* <Space.V s={12} /> */}
      <View
        style={{
          ...styles.tranactionViewContainer,
          flex: 0.375,
          alignItems: 'center',
        }}>
        <Space.V s={8} />
        <View style={{alignSelf: 'center'}}>
          <RectangleContainer
            rectContainerStyle={{
              ...styles.rectangleContainerStyle,
              height: 7,
              borderRadius: 4,
            }}
          />
        </View>
        <Space.V s={16} />
        <Image source={images.senderProfImg} />
        <Space.V s={8} />
        <Text style={{...styles.sendMoneyTextStule, fontSize: 20}}>
          Adeleke Adeyanju
        </Text>
        <Space.V s={12} />
        <Text
          style={{
            ...styles.sendMoneyTextStule,
            fontSize: 14,
            fontWeight: '400',
          }}>
          (+234) 905 1694 275
        </Text>
        <Space.V s={18} />
        <AppButton
          onPress={undefined}
          title={'Continue'}
          backgroundColor={'#FF2E63'}
          buttonContainer={{width: width * 0.392, height: height * 0.07}}
          textStyle={styles.SendMoneyTextStyle}
          borderStyle={undefined}
        />
      </View>
      <Image
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          left: width * 0.802,
          top: height * 0.429,
        }}
        source={images.reqProf5}
      />
      <Image
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          left: width * 0.4506,
          top: height * 0.165,
        }}
        source={images.reqProf1}
      />
      <Image
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          left: width * 0.152,
          top: height * 0.235,
        }}
        source={images.reqProf2}
      />
      <Image
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          left: width * 0.25,
          top: height * 0.39,
        }}
        source={images.reqProf3}
      />
      <Image
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          left: width * 0.45,
          top: height * 0.51,
        }}
        source={images.reqProf4}
      />
      <Image
        style={{
          position: 'absolute',
          width: 72,
          height: 72,
          left: width * 0.632,
          top: height * 0.279,
        }}
        source={images.reqProfMain}
      />
    </View>
  );
};

export default RequestMoney;
