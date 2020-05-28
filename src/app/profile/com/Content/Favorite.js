import React, { Component } from 'react'
import FavoriteItem from './FavoriteItem';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Favorite extends Component {
  render() {
    return (
      <>
        <div className="box-wishlist-user">
          <div className="box-title-settings-user">
            <h2 className="content-title-settings-user">Favorites</h2>
          </div>
          <Tabs type="card">
            <TabPane tab="All" key="1"><FavoriteItem/></TabPane>
          </Tabs>
        </div>
      </>
    )
  }
}
