import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import withStyles from '../../decorators/withStyles';
import s from './ProfileCard.scss';


import Video from '../Video';
import VideoComments from '../VideoComments';
import Date from '../Date';

const URL = 'http://video45.cloudapp.net';

@withStyles(s)
class ProfileCard extends Component {

  static propTypes = {
    myId: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    followUser: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      following: props.user.followers.indexOf(props.myId) != -1
    };
  }

  _followUser = () => {
    const { followUser, user } = this.props;
    followUser(user._id, this.state.following);
    this.setState({
      following: !this.state.following
    })
  };

  render() {
    const { user } = this.props;
    const { following } = this.state;

    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={URL + user.profilePic}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{user.username}<i className="material-icons right">more_vert</i></span>
          <br/>
          <a className="waves-effect waves-light btn valign-wrapper">
            {
              following ?
                <span className="valign">Following
                  <i className="large material-icons"
                     onClick={this._followUser}>cancel</i></span>
                :
                <span className="valign">Follow
                  <i className="large material-icons"
                     onClick={this._followUser}>person_add</i></span>
            }

          </a>

        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            SomeShitGoesHere
          <i className="material-icons right">close</i>
          </span>
          <p>{user.firstName} {user.lastName}</p>
        </div>

      </div>
    );
  }
}

export default ProfileCard;
