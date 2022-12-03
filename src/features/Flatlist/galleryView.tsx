import {apis} from '../../config/api';

import React, {useCallback, useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
import {layoutUtil} from '../../common/helpers/layoutUtil';
const {width, height} = layoutUtil;

const API_KEY = apis.pexelApiKey;
const API_URL = apis.pexelBaseUrl + apis.pexelEndPount;
const ImageSize = 80;

const callApi = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const {photos} = await response.json();
  return photos;
};

const GalleryView = () => {
  // SetStates
  const [images, setImages] = useState(null);

  useEffect(() => {
    console.log(width, height);

    const fetchImages = async () => {
      await callApi()
        .then(images => {
          //   console.log('images ===> ', images);
          setImages(() => images);
        })
        .catch(error => console.error(error))
        .finally(() => console.log('Finally ====>'));
      //   console.log(images);
    };

    fetchImages();
    return () => {};
  }, []);

  if (!images) {
    console.warn('Images are null ====>');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden />
        <Text>Loading ....</Text>
      </View>
    );
  }

  console.log(images);

  //   const viewItemChanged = useCallback((info: {changed: ViewToken[]}): void => {
  //     const visibleItems = info.changed.filter(entry => entry.isViewable);
  //     // perform side effect

  //     // console.log('alreadySeen', alreadySeen);
  //     visibleItems.forEach(visible => {
  //       console.log(visible);
  //     });
  //   }, []);

  const viewItemChanged = useCallback(({viewableItems}) => {
    // if (viewableItems.length === 1) {
    //   setCurrentSectionIndex(viewableItems[0].index);
    // }
    console.log('Viewable Items====>', viewableItems);
  }, []);

  //   const viewabilityConfigCallbackPairs = useRef([{viewItemChanged}]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={viewItemChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 90}}
        // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                style={StyleSheet.absoluteFillObject}
                source={{uri: item?.src?.portrait}}
              />
            </View>
          );
        }}
        horizontal={true}
        pagingEnabled
      />
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        style={{position: 'absolute', bottom: ImageSize / 2}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12}}
        renderItem={({item, index}) => {
          return (
            <Image
              style={{
                width: ImageSize,
                height: ImageSize,
                marginHorizontal: ImageSize / 10,
                borderRadius: 14,
                borderWidth: 2,
              }}
              source={{uri: item?.src?.portrait}}
            />
          );
        }}
        horizontal={true}
      />
    </View>
  );
};

export default GalleryView;
