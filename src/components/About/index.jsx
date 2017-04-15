/* @flow */
import React from 'react';
import ExperienceChart from './ExperienceChart';

import './styles.scss';

/* eslint-disable global-require, max-len */
const About = (): React.Element<any> => (
  <div styleName="Page">
    <div styleName="Cover">
      <h1 style={{ color: '#fff', margin: '4rem auto 3rem' }}>
        Hello, future.
      </h1>
      <svg style={{ width: '100%' }} viewBox="0 0 1160 342">
        <polygon
          fill="#6c7d92"
          fillRule="evenodd"
          points="0 0 130 42 130 300 0 342"
        />
        <polygon
          fill="#7b8b9f"
          fillRule="evenodd"
          points="130 42 1040 42 1040 300 130 300"
        />
        <polygon
          fill="#6c7d92"
          fillRule="evenodd"
          points="1040 42 1160 0 1160 342 1040 300"
        />
      </svg>
      <svg style={{ width: '5rem', marginTop: 64 }} viewBox="0 0 84 33">
        <polyline
          fill="none"
          stroke="#E8E8E8"
          strokeWidth="4"
          points="820 723 860 695 860 695 900 723"
          transform="matrix(1 0 0 -1 -818 725)"
        />
      </svg>
    </div>

    <div>
      <h1 styleName="Heading">Experience</h1>
      <ExperienceChart />
    </div>

    <div>
      Hi<br />Hi<br />Hi<br />Hi<br />
      Hi<br />Hi<br />Hi<br />Hi<br />
      Hi<br />Hi<br />Hi<br />Hi<br />
      Hi<br />Hi<br />Hi<br />Hi<br />
      Hi<br />Hi<br />Hi<br />Hi<br />
      Hi
    </div>
  </div>
);
/* eslint-enable global-require, max-len */

export default About;
