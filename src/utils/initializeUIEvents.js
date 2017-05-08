import store from '../redux/store';
import { updateWindowSize } from '../redux/actions';

function handleResize() {
  store.dispatch(updateWindowSize(window.innerWidth, window.innerHeight));
}

function throttleResize() {
  const throttle = (type, name) => {
    let running = false;
    const func = () => {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    window.addEventListener(type, func);
  };
  throttle('resize', 'throttledResize');
}

export default function() {
  // Throttle UI events
  throttleResize();
  window.addEventListener('throttledResize', handleResize);
}
