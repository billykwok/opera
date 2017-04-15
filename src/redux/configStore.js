import createStore from 'redux/lib/createStore';
import compose from 'redux/lib/compose';
import _merge from 'lodash/merge';
import combinedReducer from './reducers';
import defaultState from './defaultState';

const IS_DEV = (process.env.NODE_ENV === 'development');

export default function configStore(initialState = {}) {
  return typeof window !== 'undefined' ?
    createStore(
      combinedReducer,
      _merge({}, defaultState, initialState),
      compose(IS_DEV && window.devToolsExtension ?
        window.devToolsExtension() :
        f => f
      )
    ) : createStore(combinedReducer, initialState);
}
