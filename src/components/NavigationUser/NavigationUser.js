import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './NavigationUser.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import { loginUser, logoutUser } from '../../actions/AuthActions';

@withStyles(s)
class NavigationUser extends Component {

  static propTypes = {
    authHandler: PropTypes.func.isRequired,
  };

  _handleAuth = (e) => {
    e.preventDefault();
    const { authHandler } = this.props;
    authHandler()
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <button type="button" data-toggle="collapse" data-target="#mainNavbar" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div id="mainNavbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/global" className="fa fa-rss fa-2x"/></li>
            <li><Link to="/network" className="fa fa-home fa-2x"/></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to={ "/" + user }>{ user } <span className="fa fa-user fa-lg"/></Link></li>
            <li><a href="/" className="fa fa-sign-out fa-2x" onClick={this._handleAuth}/></li>
          </ul>
        </div>
      </div>
    );
  }

}
export default NavigationUser;
