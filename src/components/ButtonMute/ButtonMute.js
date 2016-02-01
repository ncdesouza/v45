import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './ButtonMute.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class ButtonMute extends Component {

  static propTypes = {
    volumeSwitch: PropTypes.func.isRequired,
    size: PropTypes.number,
  };

  state = {
    volume: true,
    hover: false
  };

  handleClick = (e) => {
    var curVol = this.state.volume;
    this.props.volumeSwitch(curVol);
    this.setState({volume: !curVol, hover: false})
  };

  handleHoverIn = () => {
    this.setState({ hover: true })
  };

  handleHoverOut = () => {
    this.setState({ hover: false })
  };

  render = () => {
    var btn = 'fa fa-' + this.props.size + 'x ';
    if (this.state.hover) {
      btn += this.state.volume ? 'fa-volume-off' : 'fa-volume-up';
    } else {
      btn += this.state.volume ? 'fa-volume-up' : 'fa-volume-off';
    }
    return (
      <div className={s.btnDiv}>
        <button className={cx(s.btn, btn)}
                onClick={this.handleClick}
                onMouseOver={this.handleHoverIn}
                onMouseOut={this.handleHoverOut}>


        </button>
      </div>
    );
  }

}

export default ButtonMute;
