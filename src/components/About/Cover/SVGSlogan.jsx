import React, { PropTypes } from 'react';
import withCSSModules from 'react-css-modules';

import styles from './style.scss';

const styleMap = {
  xs: { x: 510, y: 190 },
  sm: { x: 430, y: 160 },
  md: { x: 430, y: 160 },
  default: { x: 570, y: 140 }
};

function getStyle(name, size) {
  return (size in styleMap ? styleMap[size] : styleMap.default)[name];
}

/* eslint-disable max-len, arrow-body-style */
const SVGSlogan = ({ size, dX, dY }) => {
  return (
    <text
      styleName="Slogan"
      x={getStyle('x', size) - dX * 0.4}
      y={getStyle('y', size) - dY * 0.4}
      fill="#fff"
      textAnchor="middle"
      style={{ fontWeight: 300 }}
    >
      Make the world a better place through Technology, Design, Communications and Awesomeness!
    </text>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGSlogan.propTypes = {
  size: PropTypes.string.isRequired,
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default withCSSModules(SVGSlogan, styles);
