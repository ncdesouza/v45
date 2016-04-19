/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './Footer.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(s)
class Footer extends Component {

  render() {
    const year = (new Date).getFullYear();
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">About</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">Company</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">Blog</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">Help</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">Privacy</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="#">Terms</Link>
          <span className={s.spacer}>·</span>
        </div>
        <div className={s.container}>
          <span className={s.text}>© {year} video45 Inc.</span>
        </div>
      </div>
    );
  }

}

export default Footer;
