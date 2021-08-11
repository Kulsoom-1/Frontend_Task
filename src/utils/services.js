import {AsyncStorage} from 'react-native';
class Api {
  static async headers() {
    return await {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  static async getIsLogin() {
    return await AsyncStorage.getItem('isLoggedIn');
  }

  static async authToken() {
    return await JSON.parse(await AsyncStorage.getItem('authToken'));
  }

  static async host() {
    return await JSON.parse(await AsyncStorage.getItem('host'));
  }

  static async getHost() {
    return await JSON.parse(AsyncStorage.getItem('host'));
  }

  static get(route, token) {
    return this.xhr(route, null, 'GET', token);
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params, token) {
    return this.xhr(route, params, 'POST', token);
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static async abort(ab) {
    this.signal = ab;
  }

  static async xhr(route, params, verb, token) {
    try {
      const host = 'http://localhost:4000/api';
      const url = `${host}/${route}`;
      let options = Object.assign(
        {method: verb},
        params ? {body: JSON.stringify(params)} : null,
      );
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };
      console.log(url, options);
      let response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      } else {
        return response;
      }
    } catch (e) {
      return e.toString();
    }
  }

}
export default Api;
