import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import withStyles from '../../decorators/withStyles';
import s from './VideoCard.scss';

import { newComment } from '../../actions/VideoActions';

import Video from '../Video';
import VideoComments from '../VideoComments';
import Date from '../Date';

const URL = 'http://video45.cloudapp.net';

@withStyles(s)
class VideoCard extends Component {

  static propTypes = {
    video: PropTypes.object.isRequired,
  };

  _submitComment = (comment) => {
    const { dispatch, user, video } = this.props;
    dispatch(newComment(user.id, video._id, comment))
  };

  render() {
    const { video, user } = this.props;
    return (
      <div className={cx("card-panel", s.cardExtra)}>
        <div className="col-xs-12">
          <div className="col-xs-3">
            <img width="50px" src={URL + video.author.profilePic } className="img-thumbnail"/>
          </div>
          <div className="col-xs-9">
            <h3 className={s.topHugger}>
              <a href={ video.author.username }>{ video.author.username }</a>
            </h3>
            <h5 className={s.topHugger}>
              <small><Date date={ video.date } /></small>
            </h5>
          </div>
        </div>

        <Video url={ URL + video.videoURL }/>

        <div className="col-xs-12">
          <div className="col-xs-8">
            <div className={s.videoTitle}>{ video.title }</div>
          </div>
          <div className="col-xs-4">
          </div>
        </div>
        <VideoComments user={ user }
                       comments={ video.comments }
                       submitComment={ this._submitComment }
        />
      </div>
    );
  }
}

function select(state) {
  return {
    user: state.auth.user
  }
}

export default connect(select)(VideoCard);
