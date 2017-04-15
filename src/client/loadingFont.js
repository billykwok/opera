import FFObserver from 'font-face-observer';

export default function() {
  // Hide text using CSS class for at most 3 secs until font files are loaded
  Promise.all([new FFObserver('Raleway').load]).then(
    () => { document.documentElement.className += ' fontLoaded'; },
    () => { document.documentElement.className += ' fontLoadFailed'; }
  );
}
