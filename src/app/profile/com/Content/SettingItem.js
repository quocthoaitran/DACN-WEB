import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import { withRouter } from 'react-router-dom';

export default class SettingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.userInfo.firstname,
      lastname: this.props.userInfo.lastname,
      phone: '',
      gender: 0,
      address: '',
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      success: '',
      errors: null,
      hasSuccess: false,
      hasErrors: false,
      haschangeSuccess: false,
      haschangeError: false,
      changeSuccess: this.props.changeSuccess,
      changeErrors: this.props.changeErrors,
    }
  }

  onChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.value)
    this.setState({
      [name]: value,
      hasSuccess: false,
      hasErrors: false,
      haschangeSuccess: false,
      haschangeError: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      success: '',
      errors: null,
      hasSuccess: false,
      hasErrors: false,
      haschangeSuccess: false,
      haschangeError: false,
    });
    if (this.state.firstname == "") {
      return message.error(<span className="didauday-error-input">Please input firstname</span>);
    }
    if (this.state.lastname == "") {
      return message.error(<span className="didauday-error-input">Please input lastname</span>);
    }
    if (this.state.phone == "") {
      return message.error(<span className="didauday-error-input">Please input phone</span>);
    }
    if (this.state.address == "") {
      return message.error(<span className="didauday-error-input">Please input address</span>);
    }
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender ? true : false,
      phone: this.state.phone,
      address: this.state.address,
    }
    this.props.updateInfo(data);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.success !== prevState.success) {
      return {
        success: nextProps.success,
        hasSuccess: true,
      };
    }
    if (nextProps.errors !== prevState.errors) {
      return {
        errors: nextProps.errors,
        hasErrors: true,
      };
    }
    if (nextProps.changeSuccess !== prevState.changeSuccess) {
      return {
        changeSuccess: nextProps.changeSuccess,
        haschangeSuccess: true,
      };
    }
    if (nextProps.changeErrors !== prevState.changeErrors) {
      return {
        changeErrors: nextProps.changeErrors,
        haschangeError: true,
      };
    }
    return null;
  }

  handleChangePassword = (e) => {
    e.preventDefault();
    if ( this.state.newPassword !== this.state.newPassword2) {
      return message.error(<span className="didauday-error-input">The new password not match</span>)
    }
    let data = {
      "old_password": this.state.oldPassword,
      "new_password": this.state.newPassword,
      "new_password2": this.state.newPassword2
    }
    this.props.changePassword(data);
  }

  render() {
    return (
      <>
        {
          this.state.hasError && this.state.errors && message.error(<span className="didauday-error-input">{JSON.stringify(this.state.errors)}</span>)
        }
        {
          this.state.hasSuccess && this.state.success && message.success(<span className="didauday-error-input">{this.state.success}</span>)
        }
        {
          this.state.haschangeError && this.state.changeErrors && message.error(<span className="didauday-error-input">{JSON.stringify(this.state.changeErrors)}</span>)
        }
        {
          this.state.haschangeSuccess && this.state.changeSuccess && message.success(<span className="didauday-error-input">{this.state.changeSuccess}</span>)
        }
        <Row gutter={20}>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div className="box-title-settings-user">
              <h3 className="content-title-settings-user">Update info</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input onChange={this.onChange} type="email" className="form-control" id="email" defaultValue={this.props.userInfo.email} disabled />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Firstname: </label>
                <input onChange={this.onChange} type="text" className="form-control" id="firstname" name="firstname" defaultValue={this.props.userInfo.firstname} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Lastname: </label>
                <input onChange={this.onChange} type="text" className="form-control" id="lastname" name="lastname" defaultValue={this.props.userInfo.lastname} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Phone: </label>
                <input onChange={this.onChange} type="text" className="form-control" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Gender: </label>
                <div className="radio">
                  <label className="radio-inline"><input type="radio" name="optradio" value={1} checked />Male</label>
                  <label className="radio-inline"><input type="radio" name="optradio" value={0} />Female</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Address: </label>
                <input onChange={this.onChange} type="text" className="form-control" id="address" name="address" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div className="box-title-settings-user">
              <h3 className="content-title-settings-user">Change password</h3>
            </div>
            <form onSubmit={this.handleChangePassword}>
              <div className="form-group">
                <label htmlFor="email">Old pasword: </label>
                <input type="password" className="form-control" id="opass" name="oldPassword" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">New password: </label>
                <input type="password" className="form-control" id="npass" name="newPassword" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password confirm: </label>
                <input type="password" className="form-control" id="cpass" name="newPassword2" onChange={this.onChange} />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </Col>
        </Row>
      </>
    )
  }
}
