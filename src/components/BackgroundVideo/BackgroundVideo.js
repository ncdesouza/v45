import React, { Component, PropTypes } from 'react';
import s from './BackgroundVideo.scss';
import withStyles from '../../decorators/withStyles';

var ReactDriveIn = require("react-drive-in");
import ButtonMute from '../ButtonMute';

const videos = [
  'http://api.video45.co/public/vid/YouTube%20Rewind%20Now%20Watch%20Me%202015%20%20YouTubeRewind.mp4',
  'http://api.video45.co/public/vid/dock.mp4',
  'http://api.video45.co/public/vid/frontier.mp4',
  'http://api.video45.co/public/vid/river.mp4'
];

@withStyles(s)
class BackgroundVideo extends Component {
  state = {
    volume: true
  };

  static propTypes = {
  };

  toggleMute = (mute) => {
    let videobg = this.refs.videobg;
    if(mute) {
      videobg.mute();
      this.setState({ volume: mute})
    } else {
      videobg.unmute();
      this.setState({ volume: mute})
    }
  };

  render = () => {
    return (
      <div className={s.root}>
        <ReactDriveIn
          ref='videobg'
          showPlaylist={videos}
          mute={false}
          loopPlaylistItems={true}
        />
        <ButtonMute size={5} volumeSwitch={this.toggleMute} />
      </div>
    );
  }

}

export default BackgroundVideo;
