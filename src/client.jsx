import React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Provider from 'react-redux/lib/components/Provider';

import App from './components/App';
import clientStoreInstance from './client/clientStoreInstance';
import initializeUIEvents from './client/initializeUIEvents';

function renderApp() {
  render(<AppContainer>
    <Provider store={clientStoreInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>, document.getElementById('root'));
}

initializeUIEvents();
renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    require('./components/App');
    renderApp();
  });
}
