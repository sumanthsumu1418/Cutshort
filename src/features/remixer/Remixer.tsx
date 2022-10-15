import {View, Text, Image, Platform, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Slider from '@react-native-community/slider';
import {images} from '../../common/assets/images';
import {Colors} from '../../Theme/Variables';
import {layoutUtil} from '../../common/helpers/layoutUtil';
import SystemSetting from 'react-native-system-setting';
// import CircularContainer from '../../common/components/CircularContainer';
import CircularProgress from '../../common/components/CircularProgress';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../../Styles/styles';
// import GoBack from '../../components/GoBack';
// import Input from '../../common/components/Input';

const height = layoutUtil.height;
const width = layoutUtil.width;

const url = 'https://archive.org/download/Imagine_393/JohnLennon-Imagine.mp3';
const url2 =
  'https://cdn.trendybeatz.com/audio/Bob-Marley-No-Women-No-Cry-[TrendyBeatz.com].mp3';

var Sound = require('react-native-sound');

// Enable playback in silence mode
Sound.setCategory('Playback');
var whoosh = new Sound(url, null, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    'duration in seconds: ' +
      whoosh.getDuration() +
      'number of channels: ' +
      whoosh.getNumberOfChannels(),
  );
});
var whoosh1 = new Sound(url2, null, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    'duration1 in seconds: ' +
      whoosh1.getDuration() +
      'number of channels: ' +
      whoosh1.getNumberOfChannels(),
  );
});

var RNFetchBlob = require('rn-fetch-blob').default;

const Remixer = () => {
  const [value, setValue] = useState(0);
  const [play, setPlay] = useState(false);
  const [start, setStart] = useState(false);
  const [start1, setStart1] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const volumeListener = SystemSetting.addVolumeListener(data => {
      const volume = data.value;
      console.log('volume===>', volume);
    });

    return () => {
      SystemSetting.removeVolumeListener(volumeListener);
    };
  }, []);

  const getVolume = () => {
    SystemSetting.getVolume().then(volume => {
      console.log('Current volume is from GetVolume ' + volume);
    });
  };

  const downloadMusic = url => {
    setProgress(() => 1);
    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch('GET', url, {
        //some headers ..
      })
      .progress({interval: 250}, (received, total) => {
        console.log('progress', received / total);
        // this.setState({
        //   downloadProgress: (received / total) * 100,
        // });
        setProgress(() => (received / total) * 100);
      })
      .then(res => {
        setProgress(() => 100);
        // the temp file path
        console.log('The file saved to ', res.path());
      });
  };

  const CacheMusic = () => {
    return (
      <View style={styles.cacheMusicContainer}>
        <TouchableOpacity onPress={() => downloadMusic(url)}>
          <CircularProgress
            percent={progress}
            ringBgColor={Colors.homeAddBG}
            iconPath={images.cloud}
            // bgRingWidth={0}
            radius={30}
            imageStyle={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RemixHeaderView = () => {
    return (
      <View style={styles.SendMoneyHeaderContainer}>
        <View style={styles.remixHeaderContainer}>
          <View style={styles.remixHeaderViewContainer}>
            <Image style={{resizeMode: 'contain'}} source={images.closeIcon} />
          </View>
        </View>
        <View
          style={{...styles.remixHeaderContainer, justifyContent: 'center'}}>
          <Text style={styles.remixInstructionTextStle}>Instructions</Text>
        </View>
      </View>
    );
  };

  const PlayMusic = ({play, musicObj, right, music}) => {
    return (
      <View style={{...styles.playMusicContainer, right: right}}>
        <TouchableOpacity
          onPress={() => {
            if (!play) {
              console.log('play==>');
              musicObj.play();
              music == 'start'
                ? setStart(play => !play)
                : setStart1(play => !play);
            } else {
              console.log('Pause==>');
              musicObj.pause();
              music == 'start'
                ? setStart(play => !play)
                : setStart1(play => !play);
            }
          }}>
          <Image
            style={{width: 40, height: 40}}
            source={play ? images.pause : images.play}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.remixContainer}>
      <RemixHeaderView />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height * 0.2,
        }}>
        <Text style={{color: '#fff', fontSize: 24, fontWeight: '500'}}>
          Passing Stroam
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.sliderStyle}
          minimumValue={0}
          maximumValue={1}
          maximumTrackTintColor="transparent"
          minimumTrackTintColor="transparent"
          thumbImage={images.profile1}
          // thumbStyle={{width: 15, height: 15}}
          value={value}
          onValueChange={volue => {
            setValue(volue);
            whoosh.setVolume(volue);
            whoosh1.setVolume(volue);
            SystemSetting.setVolume(volue);
          }}
          onSlidingComplete={volue => {
            setPlay(() => !play);
            whoosh.setVolume(volue);
            whoosh1.setVolume(volue);
            setValue(volue);
            getVolume();
            // playMusic();
            console.log(volue);
          }}
          vertical={true}></Slider>
      </View>

      <PlayMusic
        play={start}
        musicObj={whoosh}
        right={width * 0.35}
        music={'start'}
      />
      <PlayMusic
        play={start1}
        musicObj={whoosh1}
        right={width * 0.55}
        music={'start1'}
      />
      <CacheMusic />
    </View>
  );
};

export default Remixer;
