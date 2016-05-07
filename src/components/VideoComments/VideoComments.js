

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './VideoComments.scss';
import withStyles from '../../decorators/withStyles';

import VideoComment from '../VideoComment';
import VideoCommentForm from '../VideoCommentForm';

const URL = 'http://video45.cloudapp.net';

import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

@withStyles(s)
class VideoComments extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    submitComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, submitComment, user } = this.props;
    let count = 0;
    return (
      <div className={s.root}>
        <ul className="collection">
          {
            comments.map((comment) => {
              count++;
              return <VideoComment key={comment._id} comment={comment} show={count <= 3}/>
            })
          }
          <VideoCommentForm user={ user } submitComment={ submitComment }/>
        </ul>
      </div>
    );
  }

}

export default VideoComments;
