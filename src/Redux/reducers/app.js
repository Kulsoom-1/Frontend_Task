import {ACTION} from '@redux/string';

const initialState = {
  devices: [],
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_DEVICES:
      return {
        ...state,
        devices: action.data,
      };
    case ACTION.SET_USERS:
      return {
        ...state,
        users: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
