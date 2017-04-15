/* @flow */
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import OnlyFor from '../../Common/OnlyFor';
import multiIncludes from '../../../utils/multiIncludes';
import experiences from './experiences';
import TimeBar from './TimeBar';
import JobLogo from './JobLogo';
import JobDetail from './JobDetail';
import {
  getDeviceType,
  getExperienceChartWidth as getWidth
} from '../../../redux/selectors';

import './styles.scss';

function mapStateToProps(state) {
  return { deviceType: getDeviceType(state), width: getWidth(state) };
}

type PT = { deviceType: string, width: number };

const ExperienceChart = ({ deviceType, width }: PT) => {
  // const size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xl';
  const isLargeDevice = multiIncludes(deviceType, ['md', 'lg', 'xl']);
  const spacing: number = isLargeDevice ? 48 : 40;
  const height: number = spacing * 16 + 64;
  return (
    <svg styleName="ExperienceChart" viewBox={`0 0 ${width} ${height}`}>
      {
        new Array(18).fill(null).map((_, i) => i).map(i =>
          <rect
            key={i}
            x="25"
            y={18 + (i * spacing)}
            width={width - 40}
            height="1"
            fill="#eaeaea"
          />)
      }
      {
        [18, 17, 16, 15, 14].map((y, i) =>
          <text key={y}>
            <tspan x="0" y={41 + (i * spacing * 4)} fill="#6B6B6B">{y}’</tspan>
          </text>)
      }
      <OnlyFor targetDeviceTypes={['sm', 'md', 'lg', 'xl']} isSVG>
        <TimeBar x={30} y={0} length={height} fill="#ececec" />
        <TimeBar x={45} y={0} length={height} fill="#ececec" />
        <TimeBar x={60} y={0} length={height} fill="#ececec" />
      </OnlyFor>
      {
        experiences.map((exp) => {
          const x: number = 10 + 15 * (exp.group + 2);
          const y: number = 18 + spacing * exp.order + (!exp.group && spacing * 0.6);
          const l: number = spacing * exp.height;
          const color: string = ['#c5eba0', '#a0dff2', '#aec6c9'][exp.group];
          const barY: number = exp.untilEnd ? 0 : y;
          return (
            <g key={exp.order}>
              <TimeBar
                x={15 * (exp.group + 2) - (deviceType === 'xs' ? exp.group * 10 : 0)}
                y={barY}
                length={(exp.fromStart ? height - barY : l)}
                fill={['#91cb57', '#4eb6d5', '#71969a'][exp.group]}
                noHead={!exp.untilEnd}
                noTail={!exp.fromStart}
              />
              <OnlyFor targetDeviceTypes={['sm', 'md', 'lg', 'xl']} isSVG>
                <rect
                  x={x}
                  y={y}
                  width={(deviceType === 'xl' ? 92 : 84) - x}
                  height={12}
                  fill={color}
                />
                <JobLogo
                  x={deviceType === 'xl' ? 92 : 84}
                  y={y}
                  width={deviceType === 'xl' ? 80 : 64}
                  height={deviceType === 'xl' ? 80 : 64}
                  url={exp.logoUrl}
                />
              </OnlyFor>
              <JobDetail
                x={deviceType === 'xs' ? 60 : (deviceType === 'xl' ? 186 : 160)}
                y={y + 16}
                deviceType={deviceType}
                title={exp.title}
                descs={exp.descs}
              />
            </g>
          );
        })
      }
    </svg>
  );
};

ExperienceChart.defaultProps = { deviceType: 'xs' };

export default connect(mapStateToProps)(ExperienceChart);
