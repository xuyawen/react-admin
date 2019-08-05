import React, { Component } from 'react';
// import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less';
const { SubMenu } = Menu;

class NavLeft extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>React OW</h1>
        </div>
        <Menu theme="dark">
          <SubMenu key="sub1" title={<span><Icon type="mail" />Email</span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default NavLeft;