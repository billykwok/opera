export default function() {
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
  throttle('scroll', 'throttledOnScroll');
}
