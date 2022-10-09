import axiosAPI from '../AxiosApi';
import apiConst from '../../../constants/api.json';

// export const getUsersList = () => {
//   return axiosAPI.get('/users');
// };

// export const getUsersByID = userID => {
//   return axiosAPI.get(`user/${userID}`);
// };

// export const addNewUser = params => {
//   return axiosAPI.post(`users`, params);
// };

export const createNewUser = params => {
  console.log('create new User =>');
  return axiosAPI.get(
    apiConst.createNewUser,
    apiConst.createNewUserToken,
    params,
  );
};
