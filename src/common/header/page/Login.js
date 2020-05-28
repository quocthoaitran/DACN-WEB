import React, { Component } from 'react';
import './didauday-login.css'
import Header from '../Header';
import Footer from '../../footer/Footer';
import { message } from 'antd';

import { withRouter, Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: '',
    token: null,
    errors: null,
    hasError: false,
    redirectToReferrer: false
  }

  handleClickLogin = (event) => {
    event.preventDefault();
    if ( this.state.email === "") {
      message.error(<span className="didauday-error-input">Email field is required</span>);
      return ;
    }
    if ( this.state.password === "") {
      message.error(<span className="didauday-error-input">Password field is required</span>);
      return ;
    }
    if ( this.state.password.length < 6) {
      message.error(<span className="didauday-error-input">Password field length must be elder 6</span>);
      return ;
    }
    this.props.loginAPI(this.state.email, this.state.password);

    this.setState({
      redirectToReferrer: true,
    })

  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      hasError: false,
      [name]: value
    })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.token !== prevState.token){
      return { token: nextProps.token };
    }

    if (nextProps.errors !== prevState.errors){
      return { errors: nextProps.errors, hasError: true };
    }
    return null;
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    console.log(from);

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <>
        {
          this.state.hasError && this.state.errors && message.error(<span className="didauday-error-input">{this.state.errors.error}</span>)
        }
        <div
          className="page-template page-template-template-hotel-search page-template-template-hotel-search-php page page-id-7411 logged-in  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
        >
          <Header />
          <div id="st-content-wrapper" className="search-result-page didauday-content">
            {/* <TopBanner /> */}
            <div className="container">
              <div className="st-hotel-result">
                <div>
                  <div className="didauday-from-login">
                    <div classname="title-login">
                      <h3>Login</h3>
                    </div>
                    <form className="form-horizontal" action="/action_page.php" onSubmit={this.handleClickLogin}>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                          <input defaultValue ={this.state.email} type="email" className="form-control" name="email" id="email" placeholder="Enter email" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                        <div className="col-sm-10">
                          <input defaultValue ={this.state.password} type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={this.onChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Login);