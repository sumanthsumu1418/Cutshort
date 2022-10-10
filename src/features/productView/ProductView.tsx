import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
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
import CircularContainer from '../../common/components/CircularContainer';
const height = layoutUtil.height;
const width = layoutUtil.width;

interface Props {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

const ProductViewFooter = () => {
  return (
    <View style={{position: 'absolute', top: height * 0.9}}>
      <TouchableOpacity
        style={{
          ...styles.footerContainer,
          backgroundColor: '#000',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: width,
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

const ProductViewHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
      }}>
      <View>
        <Image
          style={{
            width: 80,
            height: 40,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: 24,
          }}
          source={images.logo}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 20, height: 24, resizeMode: 'contain'}}
            source={images.shareIcon}
          />
        </View>
        <Space.H s={6} />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 15, height: 15, resizeMode: 'contain'}}
            source={images.closeIcon}
          />
        </View>
      </View>
    </View>
  );
};

const ProductView = ({navigation}: Props) => {
  const [title, setTitle] = useState('MODEL STYLE & DECORATION');
  const ProductImageView = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            position: 'absolute',
            top: title == 'MODEL STYLE & DECORATION' ? height * 0.156 : 0,
            width: width * 0.95,
            height: height * 0.261,
            resizeMode: 'contain',
            marginLeft: 12,
          }}
          source={images.shoe}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: '#F3F1F0',
        marginTop: 24,
      }}>
      <Space.V s={12} />
      <ProductViewHeader />
      <ProductImageView />
      <View
        style={{
          position: 'absolute',
          top:
            title == 'MODEL STYLE & DECORATION'
              ? height * 0.82
              : height * 0.266,
          backgroundColor: '#fff',
          width: width,
          height:
            title == 'MODEL STYLE & DECORATION' ? height * 0.08 : height * 0.06,
          borderWidth: 1,
          borderColor: '#0000001A',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (title == 'MODEL STYLE & DECORATION') {
              setTitle('COLOR/MATIRIAL');
            } else {
              setTitle('MODEL STYLE & DECORATION');
            }

            console.log('title ==>', title);
          }}
          style={{marginTop: 8}}>
          {title == 'MODEL STYLE & DECORATION' ? (
            <View style={{alignItems: 'center'}}>
              <RectangleContainer
                rectContainerStyle={{
                  width: 36,
                  height: 2,
                  backgroundColor: '#D3CFCD',
                }}
              />
            </View>
          ) : (
            <View></View>
          )}
          <Space.V s={title == 'MODEL STYLE & DECORATION' ? 8 : 4} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 24,
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, textAlign: 'left'}}>{`<--`}</Text>
            </View>
            <View style={{flex: 8}}>
              <Text
                style={{fontSize: 18, textAlign: 'center'}}>{`${title}`}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, textAlign: 'right'}}>{`-->`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ProductViewFooter />
    </View>
  );
};

export default ProductView;
