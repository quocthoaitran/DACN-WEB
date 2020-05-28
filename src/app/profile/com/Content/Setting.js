import React, { Component } from 'react'
import SettingItem from './SettingItem';
import { Row, Col } from 'antd';
import SettingItemContainer from '../containers/SettingItemContainer';

export default class Setting extends Component {
  render() {
    return (
      <>
      <div className="box-wishlist-user">
          <div className="box-title-settings-user">
            <h2 className="content-title-settings-user">Setting Profile</h2>
          </div>
          <SettingItemContainer/>
        </div>
      </>
    )
  }
}
