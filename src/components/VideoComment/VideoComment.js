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
import s from './VideoComment.scss';
import withStyles from '../../decorators/withStyles';

import Date from '../Date';

const URL = 'http://video45.cloudapp.net';


@withStyles(s)
class VideoComment extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    show: PropTypes.boolean
  };

  render() {
    const { comment, show } = this.props;
    const visible = show ? 'block' : 'none';
    return (
      <div className={s.root} style={{display: visible}}>
        <li className={cx(s.listItem, "collection-item avatar")}>
          <img src={ URL + comment.author.profilePic } className="circle"/>
          <span>
            <small>
              <a href={ '/' + comment.author.username }>{comment.author.username}</a>
            </small>
            <span> </span>
            <small>{comment.comment}</small>
          </span>

          <span>
            <small>
              <Date date={comment.date} />
            </small>
          </span>

        </li>
      </div>
    );
  }

}

export default VideoComment;
