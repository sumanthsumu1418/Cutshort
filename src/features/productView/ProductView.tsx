import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

import Space from '../../common/components/abstract/Space';
import {RootStackParamsList} from '../navigation/Navigator';
import {images} from '../../common/assets/images/index';
import {layoutUtil} from '../../common/helpers/layoutUtil';
import {Colors} from '../../Theme/Variables';
import AppButton from '../../common/components/Button';
import currency from '../../constants/currency.json';
import RectangleContainer from '../../common/components/RectangleContainer';
import FastImage from 'react-native-fast-image';
import OptimizedFlatlist from '../../common/components/OptimizedFlatlist';
import styles from '../../Styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const height = layoutUtil.height;
const width = layoutUtil.width;

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

const ProductViewFooter = () => {
  return (
    <View style={{position: 'absolute', top: height * 0.834}}>
      <TouchableOpacity
        style={{
          ...styles.footerContainer,
          backgroundColor: '#000',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', marginLeft: width * 0.1}}>
          <View>
            <Text
              style={{
                ...styles.footerTextStyle,
              }}>
              ₹12,380
            </Text>
          </View>
          <Space.H s={6} />
          <View>
            <Text
              style={{
                ...styles.footerTextStyle,
                fontSize: 18,
                fontWeight: '300',
                marginTop: 2,
              }}>
              View Details
            </Text>
          </View>
        </View>
        <View style={{marginRight: width * 0.1}}>
          <Text
            style={{
              ...styles.footerTextStyle,
              fontSize: 20,
              fontWeight: '500',
            }}>
            ADD TO CART
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ProductView = ({navigation}: Props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: '#F3F1F0',
        marginHorizontal: 12,
        marginTop: 24,
      }}>
      {/* <View style={{flex: 0.9}}></View> */}
      <View style={{flexDirection: 'row'}}>{/* <FastImage source={}/> */}</View>
      <ProductViewFooter />
    </View>
  );
};

export default ProductView;
