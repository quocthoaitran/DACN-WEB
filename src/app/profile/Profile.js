import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
import NavBar from './com/sidebar/NavBar';
import Overview from './com/Content/Overview';
import BookingHistory from './com/Content/BookingHistory';
import Review from './com/Content/Review';
import Favorite from './com/Content/Favorite';
import Setting from './com/Content/Setting';
import Logout from './com/Content/Logout';
import PrivateRoute from '../../hoc/PrivateRoute';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';

const {
  Content,
} = Layout;

export default class Profile extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div
        className="page-template page-template-template-hotel-search page-template-template-hotel-search-php page page-id-7411 logged-in  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
      >
        <div className='container-fluid'>
          <Header />
          <Layout
            style={{ height: '-webkit-fill-available', marginTop:'91px'}}
          >
            <NavBar />
            <Layout>
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
                  <PrivateRoute path={`${this.props.match.path}/overview`} component={Overview} />
                  <PrivateRoute path="/dashboard/booking-history" component={BookingHistory} />
                  <PrivateRoute path={`${this.props.match.path}/review`} component={Review} />
                  <PrivateRoute path="/dashboard/favorite" component={Favorite} />
                  <PrivateRoute path="/dashboard/setting" component={Setting} />
                  <PrivateRoute path="/dashboard/logout" component={Logout} />
                </div>
              </Content>
            </Layout>
          </Layout>
          <Footer />
        </div>
      </div>
    )
  }
}
