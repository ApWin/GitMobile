import {createRoutine, promisifyRoutine} from 'redux-saga-routines';

export const getMe = createRoutine('GET_ME');
export const getList = createRoutine('GET_LIST');
export const getUserDetails = createRoutine('GET_DETAILS');

export default {
  getMe: promisifyRoutine(getMe),
  getList: promisifyRoutine(getList),
  getUserDetails: promisifyRoutine(getUserDetails),
};
