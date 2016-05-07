

import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Navigation from '../Navigation';
import Footer from '../Footer';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import colors from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.green500,
    primary2Color: colors.green700,
    primary3Color: colors.green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});




class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
      user: PropTypes.string,
      token: PropTypes.string,
      state: PropTypes.object,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
    user: PropTypes.string,
  };

  static fetchData(dispatch) {
    return Promise.all([
      this.props.children.getData(dispatch)
    ])
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
      user: context.user || null,
    };
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div className={ s.content }>
        <div className={ s.header }>
          <Navigation />
        </div>
        <div className={ s.body }>
          {this.props.children}
        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    ) : this.props.children;
  }
}

export default themeDecorator(muiTheme)(connect(state => {return {state: state}})(App));
