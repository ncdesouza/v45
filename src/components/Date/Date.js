

import React, { Component, PropTypes } from 'react';
import s from './Date.scss';
import withStyles from '../../decorators/withStyles';

import moment from 'moment';

@withStyles(s)
class DateFormat extends Component {

  static propTypes = {
    date: PropTypes.string.isRequired,
  };

  render() {
    const date = moment(this.props.date);
    return (
      <div className={s.root}>
          <span>{ date.format('MMM D, YYYY') }</span>
      </div>
    );
  }

}

export default DateFormat;
