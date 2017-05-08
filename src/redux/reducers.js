import combineReducers from 'redux/lib/combineReducers';
import defaultState from './defaultState';

function deviceSpec(oState = defaultState.deviceSpec, action) {
  switch (action.type) {
    case 'UPDATE_WINDOW_SIZE':
      return action.deviceSpec;
    default:
      return oState;
  }
}

export default combineReducers({ deviceSpec });
