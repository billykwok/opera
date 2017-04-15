export function updateWindowSize(windowWidth, windowheight) {
  return {
    type: 'UPDATE_WINDOW_SIZE',
    deviceSpec: { windowWidth, windowheight }
  };
}

export function updateScrollState(position, status) {
  return {
    type: 'UPDATE_SCROLL_STATE',
    scrollState: { position, status }
  };
}

export function updateNavigationState(shouldAffix) {
  return {
    type: 'UPDATE_NAV_STATE',
    navigationState: { shouldAffix }
  };
}
