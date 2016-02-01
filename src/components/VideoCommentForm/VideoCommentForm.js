import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './VideoCommentForm.scss';
import withStyles from '../../decorators/withStyles';

const URL = 'http://video45.cloudapp.net';


@withStyles(s)
class VideoCommentForm extends Component {

  static propTypes = {
    user: PropTypes.object,
    submitComment: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    }
  }

  _handleInput = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  _checkForSubmit = (e) => {
    if (e.key === 'Enter' && !e.getModifierState('Shift')) {
      const { submitComment } = this.props;
      const { text } = this.state;
      e.preventDefault();
      submitComment(text);
      this.setState({
        text: ''
      })
    }
  };

  render() {
    const {user} = this.props;
    return (
      <div className={s.root}>
        <li className={cx(s.listItem, "collection-item avatar", "valign-wrapper")}>
          <img className="circle"
               src={ URL + user.profilePic } />
          <textarea className={cx("materialize-textarea", s.commentArea, "valign")}
                    rows={1}
                    placeholder="Write a comment..."
                    value={ this.state.text }
                    style={{height: 'initial'}}
                    onKeyPress={ this._checkForSubmit }
                    onChange={ this._handleInput }
          />
        </li>
      </div>
    );
  }

}



export default VideoCommentForm;
