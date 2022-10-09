import axios from 'axios';
import {
  requestErrorHandler,
  requestInterceptor,
  responseErrorHandler,
  responseInterceptor,
} from './AxiosHeleperMethods';

import apiConst from '../../constants/api.json';

const baseURL = apiConst.baseURL;
const axiosAPI = axios.create({
  baseURL: baseURL,
});

axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI;
// function makerequest(params: type) {
//   axios
//     .get('url')
//     .then(res => {
//       console.log(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//     .then(() => {
//       console.log('Clean up code');
//     });
// }

// try {
// } catch (error) {
// } finally {
// }
