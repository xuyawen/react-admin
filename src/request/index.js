import Axios from 'axios';
import { Modal } from 'antd';

function setLoading(isShow) {
  let loading = document.getElementById('requestLoading');
  loading.style.display = isShow;
}
export default class API {
  static getWeatherData() {
    return Axios.get('https://www.tianqiapi.com/api/?version=v1').then(res => res)
  }
  static request(options) {
    let baseURL = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/';
    if (options.data && options.data.isShowLoading !== false) {
      setLoading('block');
    }
    return new Promise((resolve, reject) => {
      Axios({
        url: options.url,
        method: 'get',
        baseURL: baseURL,
        timeout: 5000,
        params: options.params || ''
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          setLoading('none');
        }
        if (+response.status === 200) {
          let res = response.data;
          if (+res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
            reject(response.data);
          }
      }).finally(() => {
        setLoading('none');
      })
    })
  }
}