/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './ProfileBanner.scss';
import withStyles from '../../decorators/withStyles';

import Video from '../Video';

@withStyles(s)
class ProfileBanner extends Component {

  static propTypes = {
    bannerVideo: PropTypes.string.isRequired,
  };

  render() {
    const { bannerVideo } = this.props;
    return (
      <div className={s.container}>
        <Video className={s.center} url={ bannerVideo }/>
      </div>
    );
  }

}

export default ProfileBanner;
