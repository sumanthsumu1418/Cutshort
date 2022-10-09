import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../../Styles/styles';
import Space from '../../common/components/abstract/Space';
import {layoutUtil} from '../../common/helpers/layoutUtil';
import {images} from '../../common/assets/images/index';
import {RootStackParamsList} from '../navigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
// import {Colors} from '../../Theme/Variables';
// import {RFPercentage} from 'react-native-responsive-fontsize';
// import LinearGradient from 'react-native-linear-gradient';

const width = layoutUtil.width;
const height = layoutUtil.height;

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Landing'>;
}

const SendMoney = ({navigation}: Props) => {
  useEffect(() => {
    // return () => {};
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View>
        <Image
          source={images.transformBackground}
          style={{
            position: 'absolute',
            width: width,
            height: height * 0.422,
            // resizeMode: 'contain',
            // left: 86.57,
            // top: 547.07
          }}
        />
      </View>
      <View
        style={{
          marginVertical: height * 0.075,
          marginHorizontal: width * 0.04,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', flex: 1, marginTop: 2}}>
            <Image style={{width: 10, height: 16}} source={images.backIcon} />
            <Space.H s={5} />
            <Text style={styles.backTextStyle}>Back</Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                ...styles.backTextStyle,
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              New Request
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              position: 'absolute',
              width: 225,
              height: 225,
              top: height * 0.126,
              backgroundColor: '#10194E',
              borderRadius: 112.5,
            }}></View>
          <View
            style={{
              position: 'absolute',
              width: 175,
              height: 175,
              top: height * 0.153,
              backgroundColor: '#192259',
              borderRadius: 82.5,
            }}></View>
          <Image
            style={{
              width: 125,
              height: 125,
              position: 'absolute',
              top: height * 0.18,
            }}
            source={images.myprofile}
          />
          <View style={{position: 'absolute', top: height * 0.4}}>
            <Text
              style={{...styles.balanceTextStyle, textAlignVertical: 'center'}}>
              Sumanth M
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SendMoney;
