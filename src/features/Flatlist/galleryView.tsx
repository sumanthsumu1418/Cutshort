import {apis} from '../../config/api';

import React, {useCallback, useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
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
const ImageSize = 150;
const SPACING = 15;

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
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef();
  const thumbRef = useRef();

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
  }, [topRef, thumbRef]);

  const scrollToActiveIndex = (index: any) => {
    // setIndex(index)
    // scroll flatlist
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (ImageSize + SPACING) - ImageSize / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (ImageSize + SPACING * 2.1) - width / 2 + ImageSize / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) {
    // console.warn('Images are null ====>');
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

  //   const viewItemChanged = useCallback((info: {changed: ViewToken[]}): void => {
  //     const visibleItems = info.changed.filter(entry => entry.isViewable);
  //     // perform side effect

  //     // console.log('alreadySeen', alreadySeen);
  //     visibleItems.forEach(visible => {
  //       console.log(visible);
  //     });
  //   }, []);

  // const viewItemChanged = useCallback(({viewableItems}) => {
  //   // if (viewableItems.length === 1) {
  //   //   setCurrentSectionIndex(viewableItems[0].index);
  //   // }
  //   console.log('Viewable Items====>', viewableItems);
  // }, []);

  //   const viewabilityConfigCallbackPairs = useRef([{viewItemChanged}]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        // onViewableItemsChanged={viewItemChanged}
        // viewabilityConfig={{itemVisiblePercentThreshold: 90}}
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
      />
      <FlatList
        ref={thumbRef}
        data={images}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        style={{position: 'absolute', bottom: ImageSize / 2}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                style={{
                  width: ImageSize,
                  height: ImageSize,
                  marginHorizontal: SPACING,
                  borderRadius: 14,
                  borderWidth: 2,
                  borderColor: activeIndex == index ? '#fff' : 'transparent',
                }}
                source={{uri: item?.src?.portrait}}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GalleryView;
