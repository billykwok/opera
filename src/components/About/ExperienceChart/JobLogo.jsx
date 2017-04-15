/* @flow */
import React from 'react';

type PropTypes = {
  x: number,
  y: number,
  width: number,
  height: number,
  url: string
};

const JobLogo = ({ x, y, width, height, url }: PropTypes) => (
  <image x={x} y={y} width={width} height={height} xlinkHref={url} />
);

export default JobLogo;
