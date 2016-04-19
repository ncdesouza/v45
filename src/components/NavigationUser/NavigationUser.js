import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './NavigationUser.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

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
            <li>
              <IconMenu
                iconButtonElement={<IconButton ><MoreVertIcon color="#888888" /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                style={{color: "rgba(255, 255, 255, .6)"}}
                menuStyle={{zIndex: "999999"}} >
                <MenuItem linkButton
                          containerElement={<Link to="/settings" />}
                          primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Sign out" onClick={this._handleAuth} />
              </IconMenu>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
export default NavigationUser;
