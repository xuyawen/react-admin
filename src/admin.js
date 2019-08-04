import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';

class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span={3}>
          Left
        </Col>
        <Col span={21}>
          <Header></Header>
          <Row>
            Main
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;