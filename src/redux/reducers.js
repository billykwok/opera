import combineReducers from 'redux/lib/combineReducers';
import defaultState from './defaultState';

function deviceSpec(oState = defaultState.deviceSpec, action) {
  switch (action.type) {
    case 'UPDATE_WINDOW_SIZE': return action.deviceSpec;
    default: return oState;
  }
}

function scrollState(oState = defaultState.scrollState, action) {
  switch (action.type) {
    case 'UPDATE_SCROLL_STATE': return action.scrollState;
    default: return oState;
  }
}

function navigationState(oState = defaultState.navigationState, action) {
  switch (action.type) {
    case 'UPDATE_NAV_STATE': return action.shouldAffix;
    default: return oState;
  }
}

export default combineReducers({ deviceSpec, scrollState, navigationState });
