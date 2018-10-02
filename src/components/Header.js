import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <i className="fas fa-search" style={{ marginRight: '5px' }} />
          SEARCH
        </div>
        <div className="header-center">
          <Link to="/">
            <img src={logo} alt="home" className="logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-right_item">STORES</div>
          <div className="header-right_item">SIGN IN</div>
          <div className="header-right_item">
            <i className="fas fa-shopping-bag" style={{ marginRight: '5px' }} />
            BAG
          </div>
        </div>
      </div>
    );
  }
}
