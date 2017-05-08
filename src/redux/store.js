import createStore from 'redux/lib/createStore';
import compose from 'redux/lib/compose';

import combinedReducer from './reducers';
import defaultState from './defaultState';

const IS_DEV = process.env.NODE_ENV === 'development';

export default createStore(
  combinedReducer,
  defaultState,
  compose(
    IS_DEV && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
