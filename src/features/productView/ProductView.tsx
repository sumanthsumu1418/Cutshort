import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

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

const colors = [
  'red',
  'blue',
  'green',
  'red',
  'blue',
  'green',
  'red',
  'blue',
  'green',
  'red',
  'blue',
  'green',
];

const ProductViewFooter = () => {
  return (
    <View style={{position: 'absolute', top: height * 0.9}}>
      <TouchableOpacity style={styles.footerContainer}>
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
    <View style={styles.productHeaderContainer}>
      <View>
        <Image style={styles.productLogo} source={images.logo} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: 20, height: 24, resizeMode: 'contain'}}
            source={images.shareIcon}
          />
        </View>
        <Space.H s={6} />
        <View style={styles.imageContainer}>
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
  const [itemIndex, setItemIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(1);
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

  const ProductDecrnHeaderView = () => {
    return (
      <View style={styles.productDecrnHeaderContainer}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, textAlign: 'left'}}>{`<--`}</Text>
        </View>
        <View style={{flex: 8}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>{`${title}`}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, textAlign: 'right'}}>{`-->`}</Text>
        </View>
      </View>
    );
  };
  const DecorationView = () => {
    return (
      <View
        style={{
          top:
            title == 'MODEL STYLE & DECORATION'
              ? height * 0.82
              : height * 0.266,
          height:
            title == 'MODEL STYLE & DECORATION' ? height * 0.08 : height * 0.06,
          ...styles.productDecorationContainer,
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
                rectContainerStyle={styles.productRectContainer}
              />
            </View>
          ) : (
            <View></View>
          )}
          <Space.V s={title == 'MODEL STYLE & DECORATION' ? 8 : 4} />
          <ProductDecrnHeaderView />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = useCallback(({item, index}) => {
    // console.log(item);
    return (
      <View style={{justifyContent: 'center', marginHorizontal: 12}}>
        <TouchableOpacity
          onPress={async () => {
            await setItemIndex(index);
            console.log(itemIndex, index);
          }}
          style={{marginHorizontal: 12}}>
          <Text
            style={{
              fontSize: 17,
              color: index == itemIndex ? '#000' : '#646464',
              fontWeight: index == itemIndex ? '500' : '300',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const colorRenderItem = useCallback(({item, index}) => {
    console.log(item, index);
    return (
      <View style={{margin: 12, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={async () => {
            setColorIndex(index);
            console.log(index);
          }}
          style={styles.colorContainer}>
          {index == colorIndex ? (
            <View style={styles.selectedColorContainer}>
              <View style={styles.ColorContainerView}></View>
            </View>
          ) : (
            <View style={styles.unselectedColorContainer}>
              <View style={styles.ColorContainerView}></View>
            </View>
          )}
          <Space.V s={4} />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: index == colorIndex ? '#000' : '#646464',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const decorationRenderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.decrnContView}>
        <View style={styles.decrnHeaderContView}>
          <Text style={{color: '#fff', fontSize: 18}}>CALF LEATHER</Text>
        </View>
        <View style={{margin: 12}}>
          <FlatList
            data={colors}
            renderItem={colorRenderItem}
            numColumns={5}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }, []);

  const ColorOrMaterialView = () => {
    return (
      <View>
        <View style={styles.colorOrMatContainer}>
          <FlatList
            data={colors}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{top: height * 0.295, margin: 12, position: 'absolute'}}>
          <FlatList
            data={colors}
            renderItem={decorationRenderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.progressViewContainer}>
          <View style={styles.progressSelected}></View>
          <Space.H s={4} />
          <View
            style={{
              ...styles.progressSelected,
              backgroundColor: '#9B9B9B',
            }}></View>
          <Space.H s={4} />
          <View
            style={{
              ...styles.progressSelected,
              backgroundColor: '#9B9B9B',
            }}></View>
        </View>
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
      <DecorationView />
      {title !== 'MODEL STYLE & DECORATION' && <ColorOrMaterialView />}
      <ProductViewFooter />
    </View>
  );
};

export default ProductView;
