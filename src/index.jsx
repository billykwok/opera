// @flow
import React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import Provider from 'react-redux/lib/components/Provider';

import App from './components/App';
import store from './redux/store';
import initializeUIEvents from './utils/initializeUIEvents';
import SoundPiecePlayer from './utils/SoundPiecePlayer';

function renderApp() {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

initializeUIEvents();
SoundPiecePlayer.init();
renderApp();

if (module.hot) {
  // $FlowFixMe (suppress warning)
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    require('./components/App');
    renderApp(App);
  });
}
