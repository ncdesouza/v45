/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './VideoComments.scss';
import withStyles from '../../decorators/withStyles';

import VideoComment from '../VideoComment';
import VideoCommentForm from '../VideoCommentForm';

const URL = 'http://video45.cloudapp.net';


@withStyles(s)
class VideoComments extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    submitComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, submitComment, user } = this.props;
    return (
      <div className={s.root}>
        <ul className="collection">
          {
            comments.map((comment) => <VideoComment key={comment._id} comment={comment} />)
          }
          <VideoCommentForm user={ user } submitComment={ submitComment }/>
        </ul>
      </div>
    );
  }

}

export default VideoComments;
