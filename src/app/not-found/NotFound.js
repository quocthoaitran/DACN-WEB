import React, { Component } from 'react'
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';

export default class NotFound extends Component {
  render() {
    return (
      <div 
        className="error404  wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.6 vc_responsive"
      >
        <Header />
        <div className="st-404-page">
          <div className="container">
            <h1>OOPS...</h1>
            <h3>Something went wrong here :(</h3>
            <img src="/images/404.jpg" alt="404 Page" />
            <p>Sorry, we couldn't find the page you're looking for.&nbsp;</p>
            <p><strong>Try returning to the</strong> <a href="/">Homepage</a></p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
