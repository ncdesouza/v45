'use strict'
import React, { Component, PropTypes } from 'react'

const style = "ol.progtrckr { margin: 0;padding-bottom: 2.2rem;list-style-type: none;}ol.progtrckr li { display: inline-block; text-align: center; line-height: 4.5rem; padding: 0 0.7rem; cursor: pointer;}ol.progtrckr li span { padding: 0 1.5rem;}@media (max-width: 650px) {.progtrckr li span { display: none; }}.progtrckr em { display: none; font-weight: 700; padding-left: 1rem;}@media (max-width: 650px) {.progtrckr em { display: inline; }}ol.progtrckr li.progtrckr-todo { color: silver; border-bottom: 4px solid silver;}ol.progtrckr li.progtrckr-doing { color: black; border-bottom: 4px solid #33C3F0;}ol.progtrckr li.progtrckr-done { color: black; border-bottom: 4px solid #33C3F0;}ol.progtrckr li:after { content: \"\\00a0\\00a0\";}ol.progtrckr li:before { position: relative; bottom: -3.7rem; float: left; left: 50%;}ol.progtrckr li.progtrckr-todo:before { content: \"\\039F\"; color: silver; background-color: white; width: 1.2em; line-height: 1.4em;}ol.progtrckr li.progtrckr-todo:hover:before { color: #0FA0CE;}ol.progtrckr li.progtrckr-doing:before { content: \"\\2022\"; color: white; background-color: #33C3F0; width: 1.2em; line-height: 1.2em; border-radius: 1.2em;}ol.progtrckr li.progtrckr-doing:hover:before { color: #0FA0CE;}ol.progtrckr li.progtrckr-done:before { content: \"\\2713\"; color: white; background-color: #33C3F0; width: 1.2em; line-height: 1.2em; border-radius: 1.2em;}ol.progtrckr li.progtrckr-done:hover:before { color: #0FA0CE;}"

function getNavStates(indx, length) {
  let styles = []
  for (let i=0; i<length; i++) {
    if(i < indx) {
      styles.push('done')
    }
    else if(i === indx) {
      styles.push('doing')
    }
    else {
      styles.push('todo')
    }
  }
  return { current: indx, styles: styles }
}

const MultiStep = React.createClass({
  getInitialState() {
    return {
      compState: 0,
      navState: getNavStates(0, this.props.steps.length)
    }
  },

  setNavState(next) {
    this.setState({navState: getNavStates(next, this.props.steps.length)})
    if(next < this.props.steps.length) {
      this.setState({compState: next})
    }
  },

  handleKeyDown(evt) {
    if(evt.which === 13) {
      this.next()
    }
  },

  handleOnClick(evt) {
    if(evt.target.value  === (this.props.steps.length-1) &&
      this.state.compState === (this.props.steps.length-1))     {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(evt.target.value)
    }
  },

  next() {
    this.setNavState(this.state.compState + 1)
  },

  previous() {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  },

  render: function render() {
    var _this = this

    return (
        <div>
          <style dangerouslySetInnerHTML={{ __html: style }} />
          {
            React.createElement(
              'div',
              {className: 'wrapper', onKeyDown: this.handleKeyDown},
              React.createElement(
                'ol',
                {className: 'progtrckr'}, ' ',
                this.props.steps.map(function (s, i) {
                  return React.createElement(
                    'li',
                    {
                      value: i, key: i,
                      className: "progtrckr-" + _this.state.navState.styles[i],
                      onClick: _this.handleOnClick
                    },
                    React.createElement(
                      'em',
                      null,
                      i + 1
                    ),
                    React.createElement(
                      'span',
                      null,
                      _this.props.steps[i].name
                    )
                  )
                })
              ),
              this.props.steps[this.state.compState].component
            )
          }
        </div>
    )
  }
})

export default MultiStep
