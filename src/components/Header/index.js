import React, { Component } from 'react';
import API from '../../request/request';
import { Row, Col, Button } from 'antd';
import Util from '../../utils/utils'
import './index.less';

class Header extends Component {
  state = {
    userName: 'xuyawen'
  }
  componentWillMount() {
    let data = API.getWeatherData();
    console.log(data);
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({ sysTime })
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
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;