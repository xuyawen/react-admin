import Axios from 'axios';

export default class API {
  static getWeatherData() {
    return Axios.get('https://www.tianqiapi.com/api/?version=v1').then(res => res)
  }
}