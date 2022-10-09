import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
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

// import {Colors} from '../../Theme/Variables';
// import {RFPercentage} from 'react-native-responsive-fontsize';
// import LinearGradient from 'react-native-linear-gradient';

const width = layoutUtil.width;
const height = layoutUtil.height;

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Landing'>;
}

const SendMoney = ({navigation}: Props) => {
  const goBack = () => {
    navigation.navigate('Home');
  };
  const HeaderView = () => {
    return (
      <View style={styles.SendMoneyHeaderContainer}>
        <View style={{flex: 1}}>
          <GoBack goBack={goBack} />
        </View>

        <View style={{flex: 1}}>
          <Text
            style={{
              ...styles.backTextStyle,
              ...styles.SendMoneyHeaderTitleText,
            }}>
            New Request
          </Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  };

  const ProfileView = () => {
    return (
      <>
        <CircularContainer
          circularContainerStyle={{
            ...styles.defaultCirContainerStyle,
            width: 225,
            height: 225,
            top: height * 0.126,
            backgroundColor: '#10194E',
            borderRadius: 112.5,
          }}
        />
        <CircularContainer circularContainerStyle={undefined} />
        <Image
          style={styles.senDMoneyPofileImgStyle}
          source={images.myprofile}
        />
      </>
    );
  };
  useEffect(() => {
    // return () => {};
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View>
        <Image
          source={images.transformBackground}
          style={styles.SendMoneyTransformBG}
        />
      </View>
      <View
        style={{
          marginVertical: height * 0.075,
          marginHorizontal: width * 0.04,
        }}>
        <HeaderView />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ProfileView />
          <View style={styles.SendMoneyTextContainer}>
            <Text style={styles.sendMoneyTextStule}>Adeleke Ramon</Text>
            <Space.V s={16} />
            <Text
              style={{
                ...styles.SendMoneyTextStyle,
                fontSize: 14,
              }}>
              is requesting for:
            </Text>
            <Space.V s={16} />
            <Text
              style={{
                ...styles.SendMoneyTextStyle,
                fontSize: 42,
                fontWeight: 'bold',
              }}>
              {`${currency.Nigeria} 200,000`}
            </Text>
            <Space.V s={24} />
            <AppButton
              onPress={undefined}
              title={`Send money`}
              backgroundColor={'#FF2E63'}
              buttonContainer={styles.SendMoneyButtonContainer}
              textStyle={styles.SendMoneyTextStyle}
              borderStyle={undefined}
            />
            <Space.V s={12} />
            <AppButton
              onPress={undefined}
              title={`Don't send`}
              backgroundColor={Colors.homeBG}
              buttonContainer={styles.SendMoneyButtonContainer}
              textStyle={{
                ...styles.SendMoneyTextStyle,
                color: Colors.homeMoneyOpnBorder,
              }}
              borderStyle={styles.moneyOpnBorder}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SendMoney;
