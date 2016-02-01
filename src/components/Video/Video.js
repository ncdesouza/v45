import React, {ProptTypes, Component} from 'react';
import withStyles from '../../decorators/withStyles';
import s from './Video.scss';
import cx from 'classnames';

import ButtonMute from '../ButtonMute';

@withStyles(s)
class Video extends Component {

  constructor(props, context) {
    super(props, context);
    this.url = props.url;
    this.state = {
      ready: false,
      playing: false,
      mute: false
    };
    this.video = null
  }

  videoScroller = () => {
    this._isScrolledIntoView()
  };

  _isScrolledIntoView = () => {
    let docTop = window.scrollY;
    let docBottom = docTop + window.innerHeight;
    let vidTop = this.refs.wrapper.offsetTop;
    let vidBottom =  vidTop + this.refs.wrapper.offsetHeight;
    if ((vidBottom <= docBottom) && (vidTop >= docTop)) {
      this._play();
    } else
      this._pause();
  };

  _load = () => {
    this.video.load()
    this.setState({
      ready: false
    })
  };

  _play = () => {
    this.video.play();
    this.setState({ playing: true })
  };

  _pause = () => {
    this.video.pause();
    this.setState({ playing: false })
  };

  _mute = () => {
    this.video.muted = true;
    this.setState({ mute: true })
  };

  _unmute = () => {
    this.video.muted = false;
    this.setState({ mute: false})
  };

  _togglePlay = () => {
    if (this.state.playing)
      this._pause();
    else
      this._play();
  };

  _toggleMute = () => {
    if (this.state.mute)
      this._unmute();
    else
      this._mute();
  };

  _loop = () => {
    this._play();
  };

  _showLoader = () => {
    this.setState({
      ready: false
    })
  };

  _hideLoader = () => {
    this.setState({
      ready: true
    })
  };

  componentDidMount() {
    this.video = this.refs.video;
    document.addEventListener('scroll', this.videoScroller);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.videoScroller);
  }

  render() {
    const { ready } = this.state;
    return (
      <div ref="wrapper" className={s.videoWrapper}>
        <ButtonMute size={3} volumeSwitch={this._toggleMute}/>
        <video ref="video"
               src={ this.url }
               preload="metadata"
               width="100%"
               onClick={this._togglePlay}
               onEnded={this._loop}
               onWaiting={ this._showLoader }
               onCanPlay={ this._hideLoader }
        />
        {
          ready ?
            null :
            (
              <div className={cx("progress", s.pbar)}>
                <div className="indeterminate"></div>
              </div>
            )
        }
      </div>
    );
  }
}

export default Video;


