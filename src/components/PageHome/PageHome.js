/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './PageHome.scss';
import withStyles from '../../decorators/withStyles';

import { fetchHome } from '../../actions/HomeActions';
import { connect } from 'react-redux';

import VideoCard from '../VideoCard';


const title = 'Home';

@withStyles(s)
class PageHome extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    home: PropTypes.object,
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHome());
  }

  static fetchData = (dispatch) => {
    dispatch(fetchHome());
  };

  render() {
    const { data } = this.props.home;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {
            data.map(video => {
              return <VideoCard key={video._id} video={video} />
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
  }
}

export default connect(mapStateToProps)(PageHome);
