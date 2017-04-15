import React from 'react';
import path from 'path';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Provider from 'react-redux/lib/components/Provider';
import StaticRouter from 'react-router-dom/StaticRouter';
import compression from 'compression';
// import favicon from 'serve-favicon';
import ngrok from 'ngrok';

import App from './components/App';
import configStore from './redux/configStore';
import logger from './server/logger';

const app = express();
const port = 3000;
const IS_DEV = (process.env.NODE_ENV !== 'production');

app.set('x-powered-by', 'Billy Kwok\'s Brilliant Brain');
app.set('views', 'views/');
app.set('view engine', 'pug');
app.use(compression());
// app.use(favicon('/favicons/favicon.ico'));

if (IS_DEV) {
  /* eslint-disable global-require */
  const webpackConfig = require('../webpack.config.client');
  const compiler = require('webpack')(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true, chunkModules: false },
    serverSideRender: true
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  /* eslint-enable global-require */
} else {
  app.use('/static', express.static(path.join(__dirname, 'public')));
}

app.use((req, res) => {
  const ua = req.headers['user-agent'];
  let guessedWindowWidth = 1024; // Desktop or Laptop
  if (ua.search(/mobi|iPhone/i) !== -1) guessedWindowWidth = 320; // Mobile
  if (ua.search(/tablet|iPad/i) !== -1) guessedWindowWidth = 640; // Tablet
  if (ua.search(/Macintosh/i) !== -1) guessedWindowWidth = 1200; // Large
  const context = {};
  const html = renderToString(
    <Provider
      store={configStore({ deviceSpec: { windowWidth: guessedWindowWidth } })}
    >
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.render('index', {
      isDev: IS_DEV,
      ssr: html,
      initialState: configStore().getState()
    });
  }
});

app.listen(port, (err) => {
  if (err) return logger.error(err);
  if (IS_DEV) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) return logger.error(innerErr);
      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
