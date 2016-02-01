/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './ContactPage.scss';
import withStyles from '../../decorators/withStyles';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/AuthActions';

const title = 'Contact Us';

@withStyles(s)
class ContactPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  _handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <button onClick={this._handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

}

export default connect(state => state)(ContactPage);
