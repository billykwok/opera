import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGLight = ({ dX, dY }) => {
  const x = 309 + 15 - dX * 0.7;
  const y = 60 + 180 - dY * 0.8;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <path d="M224 74l-15-25L0 0l36 117h168z" fill="url(#a)" />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGLight.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGLight;
