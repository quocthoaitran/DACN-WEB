import React, { Component } from 'react';
import './didauday-login.css'
import Header from '../Header';
import Footer from '../../footer/Footer';
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

class Register extends Component {

  state = {
    email: '',
    password: '',
    passwordCon: '',
    role: 2,
    firstName: '',
    lastName: '',
    token: null,
    errors: null,
    hasError: false,
  }

  handleClickLogin = (event) => {
    event.preventDefault();
    if ( this.state.email == "" || this.state.password == "" || this.state.passwordCon == "" || this.state.firstName == "" || this.state.lastName == "") {
      message.error(<span className="didauday-error-input">All field is required</span>);
      return;
    }
    if ( this.state.password.length < 6 || this.state.passwordCon.length <6) {
      message.error(<span className="didauday-error-input">Password length must be greater than 6</span>);
      return;
    }
    if ( this.state.password !== this.state.passwordCon) {
      message.error(<span className="didauday-error-input">Password is wrong</span>);
      return;
    }
    console.log(this.state);
    this.props.registerAPI(this.state.email, this.state.password, this.state.passwordCon, this.state.role, this.state.firstName, this.state.lastName, this.props.history);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.name + event.target.value);
    this.setState({
      [name]: value,
      hasError: false,
    })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.token !== prevState.token){
      console.log(nextProps)
      const currentUrl = nextProps.location.pathname;
      // nextProps.history.push('/');
      return { token: nextProps.token };
    }
    if (nextProps.errors !== prevState.errors){
    return { errors: nextProps.errors, hasError: true };
  }
    return null;
  }

  render() {
    return (
      <>
        {
          this.state.hasError && this.state.errors && message.error(<span className="didauday-error-input">{this.state.errors.email}</span>)
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
                      <h3>Register</h3>
                    </div>
                    <form className="form-horizontal" action="/action_page.php" onSubmit={this.handleClickLogin}>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                          <input defaultValue={this.state.email} type="email" className="form-control" name="email" id="email" placeholder="Enter email" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                        <div className="col-sm-10">
                          <input defaultValue={this.state.password} type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password confirm:</label>
                        <div className="col-sm-10">
                          <input defaultValue={this.state.passwordCon} type="password" className="form-control" id="passwordCon" name="passwordCon" placeholder="Enter password" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Firstname: </label>
                        <div className="col-sm-10">
                          <input defaultValue={this.state.firstName} type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter password" onChange={this.onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Lastname: </label>
                        <div className="col-sm-10">
                          <input defaultValue={this.state.lastName} type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter password" onChange={this.onChange} />
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
    )
  }
}

export default withRouter(Register);
