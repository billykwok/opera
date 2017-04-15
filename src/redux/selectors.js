import { createSelector } from 'reselect/lib';

function getDeviceSpec(state) { return state.deviceSpec; }
function getScrollState(state) { return state.scrollState; }

export const getCurrentScrollPosition = createSelector(
  getScrollState,
  scrollState => scrollState.position
);

export const shouldNavigationAffix = createSelector(
  [getDeviceSpec, getScrollState],
  ({ windowWidth }, { position }) => {
    if ((windowWidth <= 347 && position > 312) ||
        (windowWidth > 347 && windowWidth <= 367 && position > 288) ||
        (windowWidth > 367 && windowWidth <= 463 && position > 274) ||
        (windowWidth > 463 && windowWidth <= 671 && position > 180) ||
        (windowWidth > 671 && windowWidth <= 1023 && position > 148)) {
      return true;
    }
    return false;
  }
);

export const getDeviceType = createSelector(
  getDeviceSpec,
  ({ windowWidth }) => {
    if (windowWidth < 544) return 'xs';
    if (windowWidth < 768) return 'sm';
    if (windowWidth < 992) return 'md';
    if (windowWidth < 1200) return 'lg';
    return 'xl';
  }
);

export const getExperienceChartWidth = createSelector(
  getDeviceType,
  (deviceType) => {
    switch (deviceType) {
      case 'sm': return 420;
      case 'md': return 540;
      case 'lg': return 525;
      case 'xl': return 560;
      default: return 320;
    }
  }
);
