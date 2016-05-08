'use strict'
import React, { Component, PropTypes } from 'react'
import SvgIcon from 'material-ui/lib/svg-icon';
import RaisedButton from 'material-ui/lib/raised-button';

const store = { password: '123', passwordConfirm: '' }

const StepThree = React.createClass ({
    getInitialState() {
        return store
    },

    handlePasswordChanged(event) {
      store.password = event.target.value
      this.setState(store)
    },

    handlePasswordConfirmChanged(event) {
      store.passwordConfirm = event.target.value
      this.setState(store)
    },

    render() {
        return (
            <div>
              <span>Find your friends and link your other social media accounts.</span>
              <div style={{textAlign: "center"}}>
                <RaisedButton
                  label="Facebook"
                  linkButton={true}
                  icon={
                <SvgIcon color="#ffffff">
                  <path d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                </SvgIcon>
                }
                />
              </div>
              <div>
                <div style={{width: "50%", textAlign: "center", display: 'inline-block', float: "left"}}>
                  <RaisedButton
                    label="Twitter"
                    linkButton={true}
                    icon={
                  <SvgIcon color="#ffffff">
                     <path d="M17.71,9.33C17.64,13.95 14.69,17.11 10.28,17.31C8.46,17.39 7.15,16.81 6,16.08C7.34,16.29 9,15.76 9.9,15C8.58,14.86 7.81,14.19 7.44,13.12C7.82,13.18 8.22,13.16 8.58,13.09C7.39,12.69 6.54,11.95 6.5,10.41C6.83,10.57 7.18,10.71 7.64,10.74C6.75,10.23 6.1,8.38 6.85,7.16C8.17,8.61 9.76,9.79 12.37,9.95C11.71,7.15 15.42,5.63 16.97,7.5C17.63,7.38 18.16,7.14 18.68,6.86C18.47,7.5 18.06,7.97 17.56,8.33C18.1,8.26 18.59,8.13 19,7.92C18.75,8.45 18.19,8.93 17.71,9.33M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                  </SvgIcon>
                  }
                  />
                </div>
                <div style={{width: "50%", textAlign: "center", display: 'inline-block', float: "right"}}>
                  <RaisedButton
                    label="Google+"
                    linkButton={true}
                    icon={
                  <SvgIcon color="#ffffff">
                    <path d="M20,2A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4C2,2.89 2.9,2 4,2H20M20,12H18V10H17V12H15V13H17V15H18V13H20V12M9,11.29V13H11.86C11.71,13.71 11,15.14 9,15.14C7.29,15.14 5.93,13.71 5.93,12C5.93,10.29 7.29,8.86 9,8.86C10,8.86 10.64,9.29 11,9.64L12.36,8.36C11.5,7.5 10.36,7 9,7C6.21,7 4,9.21 4,12C4,14.79 6.21,17 9,17C11.86,17 13.79,15 13.79,12.14C13.79,11.79 13.79,11.57 13.71,11.29H9Z" />
                  </SvgIcon>
                  }
                  />
                </div>
              </div>
            </div>
    )}
})

export { StepThree }
