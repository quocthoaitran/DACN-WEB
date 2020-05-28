import React, { Component } from 'react';
import { Tabs } from 'antd';
import ReviewItemContainer from '../containers/ReviewItemContainer';

const TabPane = Tabs.TabPane;

export default class Review extends Component {
  render() {
    return (
      <>
        <div className="box-wishlist-user">
          <div className="box-title-settings-user">
            <h2 className="content-title-settings-user">Reviews</h2>
          </div>
          <Tabs type="card">
            <TabPane tab="All" key="1"><ReviewItemContainer/></TabPane>
          </Tabs>
        </div>
      </>
    )
  }
}
