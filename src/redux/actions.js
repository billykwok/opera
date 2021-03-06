export function updateWindowSize(windowWidth, windowHeight) {
  return {
    type: 'UPDATE_WINDOW_SIZE',
    deviceSpec: { windowWidth, windowHeight }
  };
}

export function updatePlayerState(playerState) {
  return {
    type: 'UPDATE_PLAYER_STATE',
    playerState
  };
}
