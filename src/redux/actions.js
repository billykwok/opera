export function updateWindowSize(windowWidth, windowHeight) {
  return {
    type: 'UPDATE_WINDOW_SIZE',
    deviceSpec: { windowWidth, windowHeight }
  };
}
