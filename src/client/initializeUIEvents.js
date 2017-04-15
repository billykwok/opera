import _debounce from 'lodash/debounce';

import throttleResize from './throttleResize';
import throttleOnscroll from './throttleOnScroll';
import getScrollTop from './getScrollTop';
// import mapDeviceWidthToSize from './mapDeviceWidthToSize';

import store from './clientStoreInstance';
import { updateWindowSize, updateScrollState } from '../redux/actions';

function handleResize() {
  store.dispatch(updateWindowSize(window.innerWidth, window.innerHeight));
  store.dispatch(updateScrollState(getScrollTop(), 'SCROLL_END'));
}

function onScrolling() {
  store.dispatch(updateScrollState(getScrollTop(), 'SCROLLING'));
}

const onScrollEnd = _debounce(() => {
  store.dispatch(updateScrollState(getScrollTop(), 'SCROLL_END'));
}, 200);

function handleOnScroll() {
  onScrolling();
  onScrollEnd();
}

export default function() {
  // Throttle UI events
  throttleResize();
  throttleOnscroll();

  window.addEventListener('throttledResize', handleResize);
  window.addEventListener('throttledOnScroll', handleOnScroll);
}
