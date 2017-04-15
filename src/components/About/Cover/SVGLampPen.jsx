import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGLampPen = ({ dX, dY }) => {
  const x = 517 + 15 - dX * 0.7;
  const y = 103 + 180 - dY * 0.8;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <path d="M24.408 15.827a23.17 23.17 0 0 0 2.254-1.632L41.86 32.953a4.15 4.15 0 0 0-.277 1.494c0 1.046.386 2.002 1.024 2.733L32.32 67.078l-.249.725c-8.732.385-15.489 3.013-15.489 6.197H52c0-3.188-6.773-5.818-15.522-6.198l10.069-29.268a4.166 4.166 0 0 0 3.37-4.087 4.165 4.165 0 0 0-4.819-4.113L29.661 11.28l-.07-.087c1.644-2.183 2.264-4.338 1.576-5.89-2.014-2.694-7.283-2.734-12.677-.03C13.554.393 6.883-1.375 2 1.14l17.708 29.145c4.46-2.51 6.154-8.29 4.7-14.457z" fillOpacity=".25" fill="#151718" />
      <path stroke="#373E42" strokeWidth="4" strokeLinecap="square" d="M31 68l11-32-17-21" />
      <ellipse stroke="#373E42" strokeWidth="2" fill="#A7A7A7" cx="42" cy="36" rx="3" ry="3" />
      <path d="M48 74c0-3.314-7.611-6-17-6s-17 2.686-17 6h34z" fill="#FBB03B" />
      <path d="M20 19c5.964-3.226 9.258-8.163 8-11-2.161-2.894-8.227-2.602-14 1l6 10z" fill="#E5962E" />
      <path d="M17 32c5.748-3.237 6.71-12.136 2-20C14.378 4.379 5.851.984 0 4l17 28z" fill="#FBB03B" />
      <g transform="translate(30 44)">
        <rect fill="#D28910" transform="rotate(7 11.976 6.153)" x="10.476" y="2.153" width="3" height="8" rx="1" />
        <rect fill="#50E3E1" transform="rotate(4 9.24 6.631)" x="7.239" y="3.131" width="4" height="7" rx="1" />
        <rect fill="#F8E81C" transform="rotate(-10 1.68 7.113)" x=".679" y="3.113" width="2" height="8" rx="1" />
        <rect fill="#8B572A" transform="rotate(-2 5.674 5.05)" x="4.174" y=".049" width="3" height="10" rx="1" />
        <path fill="#25427C" d="M2 1.139l1.995-.14.627 8.956-1.995.14z" />
        <path fill="#7ED321" d="M14.335 3l1.963.382-1.335 6.871-1.964-.381z" />
        <path fill="#00A99D" d="M0 9h16l-2 21H2z" />
      </g>
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGLampPen.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGLampPen;
