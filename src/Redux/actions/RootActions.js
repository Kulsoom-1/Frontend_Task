import {ACTION} from '@redux/string';

export const logIn = (token) => ({
  type: ACTION.LOGIN,
  token,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: ACTION.SET_IS_LOGGED_IN,
  isLoggedIn,
});
