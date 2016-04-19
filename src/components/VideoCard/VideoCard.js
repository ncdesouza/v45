import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import withStyles from '../../decorators/withStyles';
import s from './VideoCard.scss';

import { newComment } from '../../actions/VideoActions';

import Video from '../Video';
import VideoComments from '../VideoComments';
import Date from '../Date';

import {IconMenu} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';


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
        <div className={cx("col-xs-12", s.bringToFront)}>
          <div className={cx("col-xs-3", s.imgWrapper)}>
            <img className="img-thumbnail"
                 style={{height: "50px"}}
                 width="50px" height="50px"
                 src={URL + video.author.profilePic } />
          </div>
          <div className="col-xs-7">
            <h5 className={s.topHugger}>
              <a className={s.author}  href={ '/' + video.author.username }>{ video.author.username }</a>
            </h5>
            <h6 className={s.topHugger}>
              <small><Date date={ video.date } /></small>
            </h6>
          </div>
          <div className={cx("col-xs-2", s.vidOpt)}>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              style={{zIndex: '1'}}
            >
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
            </IconMenu>

          </div>
        </div>

        <Video url={ URL + video.videoURL }/>

        <div className="col-xs-12">
          <div className="col-xs-8">
            <div className={s.videoTitle}>{ video.title }</div>
          </div>
          <div className="col-xs-4" style={{textAlign: 'right'}}>
            <Checkbox
              checkedIcon={<ActionFavorite />}
              unCheckedIcon={<ActionFavoriteBorder />}
            />
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
