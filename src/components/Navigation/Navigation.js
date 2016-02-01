import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './Navigation.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import { connect } from 'react-redux';

import NavigationUser from '../NavigationUser';
import NavigationPublic from '../NavigationPublic';
import { loginUser, logoutUser } from '../../actions/AuthActions';



@withStyles(s)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
    auth: PropTypes.object.isRequired,
  };

  _handleLogin = (creds = null) => {
    const { dispatch } = this.props;
    dispatch(loginUser());
  };

  _handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <nav className="navbar navbar-inverse navbar-fixed-top" style={{zIndex: 999999}}>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">[ video45 ]</Link>
            {
              auth.isAuthenticated ?
                <NavigationUser user={auth.user.username} authHandler={this._handleLogout} /> :
                <NavigationPublic handleLogin={this._handleLogin} />
            }
          </div>
        </nav>
      </div>
    );
  }

}

export default connect(state => {
  return {auth: state.auth}
})(Navigation);


//<div className="container-fluid">
//  <div className="navbar-header">
//    <Link to="/" className="navbar-brand">[ video45 ]</Link>
//  </div>
//  <div id="mainNavbar" className="collapse navbar-collapse">
//    {
//      auth.isAuthenticated ?
//        <NavigationUser user={auth.user.username} authHandler={this._handleLogout} /> :
//        <NavigationPublic handleLogin={this._handleLogin} />
//    }
//  </div>
//</div>
