import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGSmartphoneSmartwatch = ({ dX, dY }) => {
  const x = 528 + 15 - dX * 0.8;
  const y = 146 + 180 - dY * 0.8;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <rect fill="#CECECE" x="1" y="29" width="12" height="2" rx=".5" />
      <path fill="#E5E5E5" d="M5 25l-1 4h6l-1-4z" />
      <rect fill="#1A1A1A" width="14" height="26" rx="2" />
      <rect fill="#C3C3C3" x="2" y="25" width="4" height="1" rx=".5" />
      <rect fill="#C3C3C3" x="8" y="25" width="4" height="1" rx=".5" />
      <circle stroke="#4D4D4D" strokeWidth=".5" cx="7" cy="24" r="1" />
      <g transform="translate(6 1)">
        <rect fill="#4D4D4D" width="2" height="1" rx=".5" />
        <circle fill="#707070" cx="1.5" cy=".5" r=".5" />
      </g>
      <path fill="#E8E8E8" d="M1 3h12v19H1z" />
      <path fill="#CCC" d="M1 20h12v2H1z" />
      <rect fill="#1787FB" x="7" y="18" width="5" height="1" rx=".5" />
      <rect fill="#1787FB" x="2" y="15" width="6" height="2" rx=".5" />
      <rect fill="#1787FB" x="2" y="14" width="8" height="1" rx=".5" />
      <rect fill="#1787FB" x="5" y="10" width="7" height="3" rx=".5" />
      <rect fill="#1787FB" x="2" y="7" width="6" height="2" rx=".5" />
      <path fill="#CCC" d="M1 4h12v2H1z" />
      <path fill="#333F3E" d="M1 3h12v1H1z" />
      <g transform="translate(15 15)">
        <path fill="#E5E5E5" d="M4 2L3 15h4L6 2z" />
        <path d="M7.445 15h-4.89c-.307 0-.555.215-.555.48v.04c0 .265.248.48.555.48h4.89c.306 0 .555-.215.555-.48v-.04c0-.265-.249-.48-.555-.48" fill="#BEBEBE" />
        <rect fill="#565656" y="1" width="10" height="10" rx="2" />
        <path d="M6 12H4c-1.139 0-2-.483-2-1 0-.763.422-1 1-1h4c.578 0 1 .237 1 1 0 .517-.862 1-2 1M6 0H4C2.861 0 2 .483 2 1c0 .763.422 1 1 1h4c.578 0 1-.237 1-1 0-.517-.862-1-2-1" fill="#29ABE2" />
        <rect fill="#1A1A1A" x="1" y="2" width="8" height="8" rx="1" />
        <path d="M2 2.997v6.006C2 8.998 2.002 9 1.997 9h6.006C7.998 9 8 8.998 8 9.003V2.997c0 .005-.002.003.003.003H1.997C2.002 3 2 3.002 2 2.997zm-1 0c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H1.997C1.447 10 1 9.547 1 9.003V2.997z" fill="#333" />
        <path d="M6.75 6.004c0 .968-.784 1.753-1.75 1.753s-1.75-.785-1.75-1.753c0-.969.784-1.754 1.75-1.754s1.75.785 1.75 1.754zm.5 0A2.252 2.252 0 0 0 5 3.75a2.252 2.252 0 0 0-2.25 2.254A2.252 2.252 0 0 0 5 8.257c1.242 0 2.25-1.01 2.25-2.253z" fill="#00D6D0" />
        <path d="M6 6.002A1.001 1.001 0 1 0 3.998 6 1.001 1.001 0 0 0 6 6zm.75 0a1.751 1.751 0 1 1-3.502.001 1.751 1.751 0 0 1 3.502-.001z" fill="#2677CB" />
        <path d="M5.75 6.002a.751.751 0 1 1-1.502.001.751.751 0 0 1 1.502-.001zm.5 0A1.251 1.251 0 1 0 3.748 6 1.251 1.251 0 0 0 6.25 6z" fill="#C100C6" />
      </g>
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGSmartphoneSmartwatch.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGSmartphoneSmartwatch;
