/* @flow */
import React from 'react';

type PT = {
  x: number,
  y: number,
  width?: number,
  length: number,
  fill: string,
  noHead?: boolean,
  noTail?: boolean
};

const TimeBar = ({ x, y, width = 10, length, fill, noHead, noTail }: PT) => (
  <polygon
    fill={fill}
    points={[
      [0, noHead ? 0 : width / 2],
      [width / 2, 0],
      [width, noHead ? 0 : width / 2],
      [width, noTail ? length : length - width / 2],
      [width / 2, length],
      [0, noTail ? length : length - width / 2]
    ]
      .map(p => `${String(p[0] + x)} ${String(p[1] + y)}`)
      .join()}
  />
);

TimeBar.defaultProps = { width: 10, noHead: false, noTail: false };

export default TimeBar;
