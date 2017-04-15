// @flow
import React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import Provider from 'react-redux/lib/components/Provider';

import App from './components/App';
import clientStoreInstance from './utils/clientStoreInstance';
import initializeUIEvents from './utils/initializeUIEvents';

function renderApp() {
  render(
    <AppContainer>
      <Provider store={clientStoreInstance}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

initializeUIEvents();
renderApp();

if (module.hot) {
  // $FlowFixMe (suppress warning)
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    require('./components/App');
    renderApp(App);
  });
}
