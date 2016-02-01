import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './NavigationPublic.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import { connect } from 'react-redux';

import NavigationUser from '../NavigationUser';
import { loginUser, logoutUser } from '../../actions/AuthActions';



@withStyles(s)
class NavigationPublic extends Component {

  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
  };

  _handleAuth = (e) => {
    e.preventDefault();
    this.props.handleLogin()
  };

  render() {
    return (
        <div>
          <ul className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-button"
                 href="#!" data-activates="dropdown1"
                 onClick={this._handleAuth}>Sign In <i className="material-icons right">arrow_drop_down</i></a>
            </li>
            <li className={s.spacer} />
            <li><button className="waves-effect waves-light btn-large">Sign Up</button></li>
          </ul>
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
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
