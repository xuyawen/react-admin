import React, { Component } from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import './index.less';
const { SubMenu } = Menu;

class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({ menuTreeNode });
  }
  // 递归渲染侧边栏
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <Router>
          <NavLink to={item.key}>{ item.title }</NavLink>
        </Router>
      </Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>React OW</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}

export default NavLeft;