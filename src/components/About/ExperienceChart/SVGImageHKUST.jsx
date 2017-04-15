/* @flow */
import React from 'react';

type PropTypes = {
  x: number,
  y: number,
  width: number,
  height: number,
  url: string
};

/* eslint-disable global-require */
const SVGImageHKUST = ({ x, y, width, height, url }: PropTypes) => (
  <image x={x} y={y} width={width} height={height} xlinkHref={url} />
);
/* eslint-enable global-require */

export default SVGImageHKUST;
