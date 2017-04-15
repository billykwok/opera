import React, { PropTypes } from 'react';

const styleMap = {
  xs: { x: 710 },
  sm: { x: 710 },
  md: { x: 710 },
  default: { x: 970 }
};

function getStyle(name, size) {
  return (size in styleMap ? styleMap[size] : styleMap.default)[name];
}

/* eslint-disable max-len, arrow-body-style */
const SVGCloudFront2 = ({ size, dX, dY }) => {
  return size === 'xs' ? null : (
    <g
      fill="none"
      fillRule="evenodd"
      transform={`translate(${getStyle('x', size) - dX * 0.4} ${420 - dY * 0.4})`}
    >
      <path d="M60 74.4c7.663 6.13 16.713 9.587 26.4 9.6 11.323.025 21.405-4.322 28.8-12 4.592 5.962 11.295 9.368 19.2 9.6 13.043-.193 23.974-11.095 24-24 .012-11.659-7.374-21.011-16.8-24 .12-2.444.596-5.036 0-7.2.622-14.027-13.397-26.4-24-26.4-4.8 0-8.249 2.58-12 4.8C100.057 1.704 93.599.013 86.4 0 69.094-.039 53.999 10.862 48 26.4c-4.12-1.372-8.335-2.093-12-2.4C15.817 24.255.026 37.581 0 52.8-.026 70.505 15.714 83.885 36 84c9.104-.077 18.102-3.574 24-9.6z" fill="#CCD6DD" />
      <path d="M90 94.4c7.663 6.13 16.713 9.587 26.4 9.6 11.323.025 21.405-4.322 28.8-12 4.592 5.962 11.295 9.368 19.2 9.6 13.043-.193 23.974-11.095 24-24 .012-11.659-7.374-21.011-16.8-24 .12-2.444.596-5.036 0-7.2.622-14.027-13.397-26.4-24-26.4-4.8 0-8.249 2.58-12 4.8-5.543-3.096-12.001-4.787-19.2-4.8-17.306-.039-32.401 10.862-38.4 26.4-4.12-1.372-8.335-2.093-12-2.4-20.183.255-35.974 13.581-36 28.8-.026 17.705 15.714 31.085 36 31.2 9.104-.077 18.102-3.574 24-9.6z" fill="#F2F2F2" />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGCloudFront2.propTypes = {
  size: PropTypes.string.isRequired,
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGCloudFront2;
