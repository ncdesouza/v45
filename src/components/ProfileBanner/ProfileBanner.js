

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
