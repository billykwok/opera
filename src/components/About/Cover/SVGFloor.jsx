import React, { PropTypes } from 'react';

const styleMap = {
  xs: {
    wallX: 260,
    wallY: 150,
    wallWidth: 540,
    wallHeight: 280,
    floorHeight: 72
  },
  sm: {
    wallX: 115,
    wallY: 120,
    wallWidth: 690,
    wallHeight: 320,
    floorHeight: 72
  },
  md: {
    wallX: 115,
    wallY: 120,
    wallWidth: 690,
    wallHeight: 320,
    floorHeight: 72
  },
  default: {
    wallX: 115,
    wallY: 80,
    wallWidth: 970,
    wallHeight: 360,
    floorHeight: 86
  }
};

function getStyle(name, size) {
  return (size in styleMap ? styleMap[size] : styleMap.default)[name];
}

/* eslint-disable max-len, arrow-body-style */
const SVGFloor = ({ size, dX, dY }) => {
  return (
    <g
      fill="none"
      fillRule="evenodd"
      transform={`translate(${-20 - dX * 0.6} ${-dY * 0.6})`}
    >
      <rect
        x={getStyle('wallX', size)}
        y={getStyle('wallY', size)}
        width={getStyle('wallWidth', size)}
        height={getStyle('wallHeight', size)}
        fill="#5685BD"
      />
      <polygon
        fill="#406694"
        points={[
          getStyle('wallX', size),
          424,
          getStyle('wallWidth', size) + getStyle('wallX', size),
          424,
          getStyle('wallWidth', size) + getStyle('wallX', size) + 85,
          getStyle('floorHeight', size) + 424,
          getStyle('wallX', size) - 85,
          getStyle('floorHeight', size) + 424
        ].join(' ')}
      />
      <rect
        fill="#28465d"
        x={getStyle('wallX', size) - 85}
        y={getStyle('floorHeight', size) + 424}
        width={getStyle('wallWidth', size) + 170}
        height="10"
      />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGFloor.propTypes = {
  size: PropTypes.string.isRequired,
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGFloor;
