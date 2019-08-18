import React, { Component } from 'react';
import API from '../../request';
import { Row, Col, Button } from 'antd';
import Util from '../../utils/utils'
import './index.less';

class Header extends Component {
  state = {
    userName: 'xuyawen'
  }
  async componentWillMount() {
    let { data, status } = await API.getWeatherData();
    if (status === 200) {
      let { data: weatherList } = data;
      let [today, ...otherWeatherList] = weatherList;
      let { wea: weather } = today;
      this.setState({ weather, otherWeatherList });
    }
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({ sysTime });
    }, 1000)
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{ this.state.userName }</span>
            <Button type="link">退出</Button>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{ this.state.sysTime }</span>
            <span className="weather-detail">{ this.state.weather }</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;