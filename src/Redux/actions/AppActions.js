import {ACTION} from '@redux/string';

export const getDevices = (data) => ({
  type: ACTION.GET_DEVICES,
  data,
});

export const setDevices = (data) => ({
  type: ACTION.SET_DEVICES,
  data,
});

export const getUsers = (data) => ({
  type: ACTION.GET_USERS,
  data,
});

export const setUsers = (data) => ({
  type: ACTION.SET_USERS,
  data,
});
