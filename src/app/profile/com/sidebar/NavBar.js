import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

const {
  Sider,
} = Layout;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected :['1'],
    }
  }

  handleCLick = (e) => {
    console.log('click', e)
  }
  
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" onClick={this.handleCLick} defaultSelectedKeys={['1']} >
          <Menu.Item key="1">
            <NavLink to="/dashboard/booking-history">
              <Icon type="book" />
              <span className="nav-text">Booking History</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/dashboard/review">
              <Icon type="star" />
              <span className="nav-text">Review</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/dashboard/favorite">
              <Icon type="heart" />
              <span className="nav-text">Favorites</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/dashboard/setting">
              <Icon type="setting" />
              <span className="nav-text">Settings</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(NavBar);