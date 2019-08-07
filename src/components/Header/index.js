import React, { Component } from 'react';
import API from '../../request/request';

class Header extends Component {
  componentWillMount() {
    let data = API.getWeatherData();
    console.log(data);
  }
  render() {
    return (
      <div>Header</div>
    );
  }
}

export default Header;