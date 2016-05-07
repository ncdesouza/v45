

import 'babel-core/polyfill';
import path from 'path';

// express imports
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';


// database imports
import mongoose from 'mongoose';
require('./models/User');
require('./models/Video');

// react imports
import React from 'react';
import ReactDOM from 'react-dom/server';

// redux imports
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

// module imports
import Router from './routes';
import Html from './components/Html';
import assets from './assets';
import { port, database } from './config';
import { USER, TOKEN } from './constants/Cookie';


//
// Configure DataBase
// -----------------------------------------------------------------------------
mongoose.connect(database.urlDev);

//
// Init server
//
const server = global.server = express();

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(jwt({
  secret: 'video45rocks',
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    } else if (req.body && req.body.token) {
      return req.body.token;
    } else if (req.cookies && req.cookies[TOKEN]) {
      return req.cookies[TOKEN];
    }
    return null;
  },
}));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));
server.use('/api/login', require('./api/login'));
server.use('/api/home', require('./api/home'));
server.use('/api/profile', require('./api/profile'));
server.use('/api/comment', require('./api/comment'));
server.use('/api/user', require('./api/user'));
server.use('/api/video', require('./api/video'));

//
// Register Redux middleware
// -----------------------------------------------------------------------------


//server.use(handleRender)

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  console.log(req.user);
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };
    const css = [];
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
      token: req.user ? req.cookies[TOKEN] : null,
      user: req.user ? req.cookies[USER] : null,
    };

    const initialAuthState = {
      isFetching: false,
      isAuthenticated: req.user ? true : false,
      user: req.user ? req.user : null,
    };

    const store = configureStore({auth: initialAuthState});

    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      data.body = ReactDOM.renderToString(
        React.createElement(Provider, {store: store}, component));
      data.css = css.join('');
    });

    data.initialState = store.getState();

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});
