'use strict'
import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone';

import TextField from 'material-ui/lib/text-field';
const store = { email: '', emailConfirm: '' , file: null};

const StepTwo = React.createClass ({
    getInitialState() {
        return store
    },

    handleEmailChanged(event) {
      store.email = event.target.value
      this.setState(store)
    },

    handleEmailConfirmChanged(event) {
      store.emailConfirm = event.target.value
      this.setState(store)
    },

    onDrop(file) {
      store.file = file[0];
      this.setState(store);
      console.log('Received files: ', file);
    },

    render() {
        return (
        <div>
          <div style={{width: "50%", display: 'inline-block', float: "left"}}>
            <TextField
              hintText="Enter your full name"
              floatingLabelText="Full Name"
              fullWidth={true}
            />
            <TextField
              hintText="Enter a Password"
              floatingLabelText="Password"
              fullWidth={true}
            />
            <TextField
              hintText="Confirm your password"
              floatingLabelText="Confirm Password"
              fullWidth={true}
            />
          </div>
          <div style={{width: "50%", float: "right", display: 'inline-block', textAlign:"center"}} >
            <div style={{display: "inline-block"}}>
              <Dropzone multiple={false} onDrop={this.onDrop}>
                {
                  this.state.file ?
                    <img height="100%" width="100%" src={this.state.file.preview}/> :
                    <span>Drag or click inside the box to select profile picture</span>
                }
              </Dropzone>
            </div>
          </div>
        </div>
    )}
})

export { StepTwo }
