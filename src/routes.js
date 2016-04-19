/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';

import PageIndex from './components/PageIndex';
import PageHome from './components/PageHome';
import ProfilePage from './components/ProfilePage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import SettingsPage from './components/SettingsPage';

import RegisterPage from './components/RegisterPage';

import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

import { Provider } from 'react-redux';
import { TOKEN, USER } from './actions/AuthActions'


const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next(state);
    return component && (
          <App context={state.context}>{component}</App>
      );
  });

  on('/', async (state) => <PageIndex />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('/settings', async () => <SettingsPage />);

  on('/:username', async(state) => {
    return <ProfilePage username={state.params.username} />
  });

  on('error', (state, error) => {
    return (
      state.statusCode === 404 ?
        <App context={state.context} error={error}><NotFoundPage /></App> :
        <App context={state.context} error={error}><ErrorPage /></App>
    )
  });
});

export default router;
