import {PermissionsAndroid} from 'react-native';
import {deviceInfoUtil} from './deviceInfoUtil';
// import constants from '../../constants/AppInfo.json';
import {appName} from '../../constants/AppInfo.json';
// import Geolocation from 'react-native-geolocation-service';

export const askPermission = (permission: string) =>
  new Promise(async (resolve, reject) => {
    // if (permission === 'location') {
    //   if (Platform.OS === 'ios') {
    //     try {
    //       const permissionStatus = await Geolocation.requestAuthorization(
    //         'whenInUse',
    //       );
    //       if (permissionStatus === 'granted') {
    //         return resolve('granted');
    //       }
    //       reject('Permission not granted');
    //     } catch (error) {
    //       return reject(error);
    //     }
    //   }
    //   return PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //   )
    //     .then(granted => {
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         resolve('granted');
    //       }
    //       return reject('Location Permission denied');
    //     })
    //     .catch(error => {
    //       return reject(error);
    //     });
    // }
    if (permission === 'camera') {
      if (deviceInfoUtil.isAndroid()) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: appName,
              message: `${appName} needs access to your camera`,
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return resolve('granted');
          }
          reject('Permission not granted');
        } catch (error) {
          return reject('Permission not granted');
        }
      }
      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve('granted');
          }
          return reject('Location Permission denied');
        })
        .catch(error => {
          return reject(error);
        });
    }
  });

// export const askFilesPermission = () => {
//   if (Platform.OS == 'android') {
//     PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     ])
//       .then(status => {
//         if (
//           status['android.permission.READ_EXTERNAL_STORAGE'] == 'granted' &&
//           status['android.permission.WRITE_EXTERNAL_STORAGE'] == 'granted'
//         ) {
//         } else {
//           Alert.alert(
//             I18n.t('Alert'),
//             I18n.t(
//               'Please enable storage permissions from settings for Trashap if you want to share Trashie to social media.',
//             ),
//           );
//         }
//       })
//       .catch(error => {
//         return {permissionStatus: 400};
//       });
//   }
// };
