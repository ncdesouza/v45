import React, { Component, PropTypes } from 'react';
import s from './PageIndex.scss';
import withStyles from '../../decorators/withStyles';


import BackgroundVideo from '../BackgroundVideo';
import FormLogin from '../FormLogin';
import Link from '../Link';

import { connect } from 'react-redux';

import PublicHome from '../PublicHome';
import PageHome from '../PageHome';

const title = 'v45';

@withStyles(s)
class PageIndex extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static fetchData = (dispatch) => {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated)
      return PublicHome.fetchData(dispatch)
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated ? <PageHome /> : <PublicHome />;
  }

}

export default connect(state => {return {auth: state.auth}})(PageIndex);
