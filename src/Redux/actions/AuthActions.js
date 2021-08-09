import {ACTION} from '@redux/string';

export const loginRequest = (data) => ({
  type: ACTION.LOG_IN_REQUEST,
  data,
});

export const setUserData = (data) => ({
  type: ACTION.SET_USER_DATA,
  data,
});
