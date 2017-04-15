/* @flow */
import React from 'react';
import multiIncludes from '../../../utils/multiIncludes';

type PT = {
  x: number,
  y: number,
  deviceType: string,
  title: string,
  descs: Array<string>
};

const JobDetail = ({ x, y, deviceType, title, descs }: PT) => {
  const largerFont = multiIncludes(deviceType, ['md', 'lg', 'xl']);
  return (
    <text fontSize={largerFont ? 16 : 14} alignmentBaseline="hanging">
      <tspan
        x={x}
        y={y}
        fontSize={largerFont ? 18 : 16}
        fontWeight={600}
        fill="#71969a"
      >
        {title}
      </tspan>
      {descs.map((p, i) => (
        <tspan
          key={p}
          x={x}
          y={y + (largerFont ? 22 : 20) * (i + 1)}
          fill="#8e8e8e"
        >
          {p}
        </tspan>
      ))}
    </text>
  );
};

export default JobDetail;
