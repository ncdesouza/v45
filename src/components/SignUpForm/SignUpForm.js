import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './SignUpForm.scss';
import withStyles from '../../decorators/withStyles';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Divider from 'material-ui/lib/divider';

import { connect } from 'react-redux';

import MultiStep from './MultiStep';

import { StepOne } from './stepone'
import { StepTwo } from './steptwo'
import { StepThree } from './stepthree'
import { StepFour } from './stepfour'

const steps =
  [
    {name: 'Start', component: <StepOne/>},
    {name: 'Info', component: <StepTwo/>},
    {name: 'Social', component: <StepThree/>},
    {name: 'Finish', component: <StepFour/>}
  ];

// @withStyles(s)
class SignUpForm extends Component {

  // static propTypes = {
  //   handleSignUp: PropTypes.func.isRequired,
  // };

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      email: '',
      password: '',
      passwordCheck: '',
      gender: '',
      birthday: ''
    };
  }

  handleOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false})
  }

  _handleAuth = (e) => {
    e.preventDefault();
    const creds = { 'email': this.state.email, 'password': this.state.password }
    this.props.handleSignUp()
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="SignUp"
        primary={true}
        disabled={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Sign Up"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{height: "500px"}}
        >
          <MultiStep steps={steps} />
        </Dialog>
      </div>
    );
  }

}

export default SignUpForm;
//

//
// <TextField
//   hintText="Enter a username"
//   floatingLabelText="Username"
//   fullWidth={true}
// />
// <TextField
// hintText="Enter a password"
// floatingLabelText="Password"
// type="password"
// fullWidth={true}
//   />
//   <TextField
// hintText="Enter the same password again"
// floatingLabelText="Password Check"
// type="password"
// fullWidth={true}
//   />
