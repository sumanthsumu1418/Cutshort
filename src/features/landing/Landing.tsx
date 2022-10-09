import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamsList} from '../navigation/Navigator';
import {images} from '../../common/assets/images/index';
import {layoutUtil} from '../../common/helpers/layoutUtil';
// import {Colors} from '../../Theme/Variables';
import Space from '../../common/components/abstract/Space';
import AppButton from '../../common/components/Button';
import RectangleContainer from '../../common/components/RectangleContainer';
import FastImage from 'react-native-fast-image';
import styles from '../../Styles/styles';


interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Landing'>;
}

const Landing = ({navigation}: Props) => {
  // Navigating to Home Page : )
  const goHome = () => {
    console.log('Navigation');
    navigation.navigate('Home');
  };

  // Landing page Image View
  const LandingImageView = () => {
    return (
      <View style={{flex: 0.7}}>
        <FastImage
          style={{
            height: layoutUtil.height * 0.7,
            width: layoutUtil.width,
          }}
          source={images.landingImage}
          // priority: FastImage.priority.normal,
        />
      </View>
    );
  };

  const OnboardingProgressView = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {/* <Text>Hii</Text> */}
        <RectangleContainer />
        <Space.H s={4} />
        <RectangleContainer
          rectContainerStyle={styles.onboardingProgressStyle}
        />
        <Space.H s={4} />
        <RectangleContainer />
      </View>
    );
  };

  const OnBoardingContentView = () => {
    return (
      <View>
        <Text style={styles.onboardingHeaderTextStyle}>
          Transfer that is safe
        </Text>
        <Space.V s={layoutUtil.height * 0.01} />
        <Text style={styles.onboardingTextStyle}>
          you have nothing to be scared about
        </Text>
        <Space.V s={layoutUtil.height * 0.005} />
        <Text style={styles.onboardingTextStyle}>
          about, we got you covered
        </Text>
      </View>
    );
  };

  const OnboardingView = () => {
    return (
      <View style={styles.onboardingViewStyle}>
        <View
          style={{
            marginTop: layoutUtil.height * 0.04,
            marginLeft: layoutUtil.width * 0.1,
          }}>
          <OnboardingProgressView />
          <Space.V s={layoutUtil.height * 0.01} />
          <OnBoardingContentView />
          <Space.V s={layoutUtil.height * 0.01} />
          <AppButton
            title="Start Banking"
            // size= ''
            backgroundColor="#fff"
            onPress={goHome}
            buttonContainer={styles.buttonContainer}
            textStyle={styles.textStyle}
            borderStyle={undefined}
          />
        </View>
      </View>
    );
  };

  const OnboardingContainer = () => {
    return (
      <View style={{flex: 0.3, flexDirection: 'row'}}>
        <OnboardingView />
        <View style={{flex: 0.15}}></View>
      </View>
    );
  };

  useEffect(() => {
    console.log(layoutUtil.height, layoutUtil.width);

    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <LandingImageView />
      <Space.V s={layoutUtil.height * 0.05} />
      <OnboardingContainer />
    </View>
  );
};

export default Landing;
