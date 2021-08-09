import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  THEME: '#ff1844',
  SECOND_THEME: '#ec1c25',
  DARK_MODE : '#ec1c25',
  TEXT: 'black',
  BACKGROUND: 'white',
  GREY: 'grey',
  LIGHT_GREY: 'rgb(170, 170, 170)',
  WHITE_GREY: 'rgb(240, 240, 240)',
  DARK_GREY: 'rgb(110, 110, 110)',
  BLACK_GREY: 'rgb(80, 80, 80)',
  RED: 'rgb(204, 0, 5)',
  BLACK: 'black',
  WHITE: 'white',
  GREEN: 'rgb(89, 149, 51)',
  LIGHT_GREEN: 'rgb(102, 211, 18)',
  DIVIDER: 'rgb(200, 200, 200)',
};

export const SCREEN_WIDTH = width;
export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;
