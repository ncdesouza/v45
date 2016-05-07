

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './VideoOptions.scss';
import withStyles from '../../decorators/withStyles';

const URL = 'http://video45.cloudapp.net';


@withStyles(s)
class VideoOptions extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
  };

  render() {
    const { comment } = this.props;
    return (
      <ul id="options" className={s.root}>

      </ul>
    );
  }

}

export default VideoOptions;
