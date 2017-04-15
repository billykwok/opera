import React, { PropTypes } from 'react';

function getColorByTheme(theme) {
  switch (theme) {
    case 'light': return '#fff';
    case 'dark': return '#333';
    default: return '#1DA1F3';
  }
}

/* eslint-disable max-len */
const SVGTwitter = ({ theme = 'color' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <title>Twitter Icon</title>
    <g transform="translate(0 2)" fill="none" fillRule="evenodd">
      <path fill={getColorByTheme(theme)} d="M24.034 2.312a9.65 9.65 0 0 1-2.83.774A4.929 4.929 0 0 0 23.373.36a9.968 9.968 0 0 1-3.138 1.196A4.916 4.916 0 0 0 16.641 0a4.93 4.93 0 0 0-4.8 6.057A14.037 14.037 0 0 1 1.671.905 4.932 4.932 0 0 0 3.2 7.49a4.928 4.928 0 0 1-2.234-.616v.062a4.932 4.932 0 0 0 3.956 4.835 4.892 4.892 0 0 1-2.233.088 4.944 4.944 0 0 0 4.607 3.428 9.922 9.922 0 0 1-7.306 2.04 13.962 13.962 0 0 0 7.56 2.215c9.073 0 14.03-7.516 14.03-14.03 0-.211-.008-.431-.017-.642a10.043 10.043 0 0 0 2.47-2.558z" />
    </g>
  </svg>
);
/* eslint-enable max-len */

SVGTwitter.propTypes = { theme: PropTypes.oneOf(['light', 'dark', 'color']) };

export default SVGTwitter;
