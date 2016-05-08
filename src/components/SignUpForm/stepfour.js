'use strict'
import React, { Component, PropTypes } from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import Checkbox from 'material-ui/lib/checkbox';

const store = { checked: false }

const StepFour = React.createClass ({
    getInitialState() {
        return store
    },

    handleCheckedChanged(event) {
      store.checked = event.target.checked
      this.setState(store)
    },

    render() {
        return (
        <div>
            <div>
                <div>
                    <span>By clicking "Accept" I agree that:</span>
                    <ul style={{paddingLeft: 25}}>
                        <li style={{listStyleType: "circle"}}>I have read and accepted the <a href="#">User Agreement</a></li>
                        <li style={{listStyleType: "circle"}}>I have read and accepted the <a href="#">Privacy Policy</a></li>
                    </ul>
                    <label>
                      <Checkbox
                        label="Accept"
                      />
                    </label>
                </div>
            </div>
        </div>
  )}
})

export { StepFour }

