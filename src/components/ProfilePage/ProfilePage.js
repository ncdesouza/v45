

import React, { Component, PropTypes } from 'react';
import s from './ProfilePage.scss';
import withStyles from '../../decorators/withStyles';

import { fetchProfile } from '../../actions/ProfileActions';
import { followUser, unFollowUser } from '../../actions/UserActions';
import redux, { connect } from 'react-redux';

import ProfileBanner from '../ProfileBanner';
import VideoCard from '../VideoCard';
import ProfileCard from '../ProfileCard';
import Loader from 'react-loader';

const URL = 'http://video45.cloudapp.net';

@withStyles(s)
class ProfilePage extends Component {

  constructor(props, context) {
    super(props, context);
    this.title = this.props.username || 'Profile';
  }

  static propTypes = {
    me: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    username: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(this.title);
    const { dispatch, username } = this.props;
    dispatch(fetchProfile(username))
  }

  submitFollow = (theirId, following) => {
    const { dispatch, me } = this.props;
    if (following)
      dispatch(unFollowUser(me.id, theirId));
    else
      dispatch(followUser(me.id, theirId));
  };


  render() {
    const { me } = this.props;
    const { data } = this.props.profile;
    const { videos, user } = this.props.profile.data;
    return (
      <div className={s.container}>

        <div className={s.main}>

          <Loader loaded={ data.length !== 0 }>
            <div className={s.profile}>
              {
                user ?
                  <ProfileCard myId={me.id}
                               user={user}
                               followUser={this.submitFollow}
                  /> :
                  null
              }
            </div>
            <div className={s.posts}>
              {
                videos ?
                videos.map((video) => {
                  return <VideoCard key={video._id} video={video} />
                }) : null
              }
            </div>
          </Loader>
        </div>
      </div>
    );
  }

}

function mapper(state) {
  return {
    profile: state.profile,
    me: state.auth.user
  }
}

export default connect(mapper)(ProfilePage);
