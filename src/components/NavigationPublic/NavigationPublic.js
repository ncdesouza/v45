import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './NavigationPublic.scss';
import withStyles from '../../decorators/withStyles';

import Popover from 'material-ui/lib/popover/popover';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

import { connect } from 'react-redux';

import SignUpForm from '../SignUpForm';

@withStyles(s)
class NavigationPublic extends Component {

  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.signupForm = null;
    this.state = {
      open: false,
      email: '',
      password: ''
    };
  }

  _handleAuth = (e) => {
    e.preventDefault();
    const creds = { 'email': this.state.email, 'password': this.state.password }
    this.props.handleLogin()
  };

  handleRegistrationDialog = () => {
    this.signupForm.handleOpen();
  };

  handleTouchTap = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>
              <RaisedButton label="SignUp" onTouchTap={this.handleRegistrationDialog} />
              <SignUpForm ref={(form) => this.signupForm = form} />
            </li>
            <li className={s.spacer} />
            <li>
              <FlatButton
                onTouchTap={this.handleTouchTap}
                label="Login"
                className={s.loginbtn}
              />
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}>
                <div className={s.popover}>
                  <div>
                    <TextField
                      hintText="Enter your username or email"
                      floatingLabelText="Username"
                      onChange={this.handleEmailChange} />
                  </div>
                  <div>
                    <TextField
                      hintText="Enter your password"
                      floatingLabelText="Password"
                      type="password"
                      onChange={this.handlePasswordChange} />
                  </div>
                  <RaisedButton
                    className={s.loginbtn2}
                    onClick={this._handleAuth}
                    label="Login"/>
                </div>
              </Popover>
            </li>
          </ul>
        </div>
    );
  }

}

export default NavigationPublic;

//<div id="mainNavbar" className="collapse navbar-collapse">
//  <ul className="nav navbar-nav">
//  </ul>
//  <ul className="nav navbar-nav navbar-right">
//    <li><button className={cx("btn-link", s.signIn)} onClick={this._handleAuth}>Sign In </button></li>
//    <li className={s.spacer} />
//    <li><button className={cx("btn-primary", s.signUp)}>Sign Up</button></li>
//  </ul>
//</div>
