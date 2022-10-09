import {Alert} from 'react-native';

export const requestInterceptor = (config: {
  headers: {[x: string]: string};
  method: any;
  baseURL: any;
  url: any;
  // assessToken: any;
}) => {
  const acesssToken = '';

  if (acesssToken != null) {
    config.headers['x-auth'] = acesssToken;
  }

  console.log('Headers ==>', config.headers);
  console.log('Method ==>', config.method);
  console.log('URL ==>', config.baseURL + config.url);

  return config;
};

export const responseInterceptor = (config: {
  config: {headers: any; method: any; baseURL: any; url: any};
  status: any;
  data: any;
}) => {
  console.log('REQUEST ==>');
  console.log('Headers ==>', config.config.headers);
  console.log('Method ==>', config.config.method);
  console.log('URL ==>', config.config.baseURL + config.config.url);

  console.log('RESPONSE ==>');
  console.log('Headers ==>', config.status);
  console.log('Headers ==>', config.data);

  return config;
};

export const responseErrorHandler = error => {
  const originalConfig = error.config;

  if (error?.response?.status === 401 && !originalConfig._retry) {
    // return refreshTakeApiCall()
  }

  Alert.alert(error);
  return Promise.reject(errorObj);
};

export const requestErrorHandler = (error: any) => {
  return Promise.reject(error);
};
