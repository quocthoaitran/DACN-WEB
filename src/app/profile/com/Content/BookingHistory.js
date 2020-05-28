import React, { Component } from 'react';
import { Tabs } from 'antd';
import BookingHistoryItem from './BookingHistoryItem';
import BookingHistoryItemContainer from '../containers/BookingHistoryItemContainer';

const TabPane = Tabs.TabPane;

export default class Favorite extends Component {
  render() {
    return (
      <>
        <div className="box-wishlist-user">
          <div className="box-title-settings-user">
            <h2 className="content-title-settings-user">Booking History</h2>
          </div>
          <Tabs type="card">
            <TabPane tab="All" key="1"><BookingHistoryItemContainer/></TabPane>
          </Tabs>
        </div>
      </>
    )
  }
}
