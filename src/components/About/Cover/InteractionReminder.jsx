import React from 'react';
import withCSSModules from 'react-css-modules';

import styles from './InteractionReminder.scss';

/* eslint-disable max-len */
const InteractionReminder = () => (
  <svg styleName="InteractionReminder" viewBox="0 0 223 21">
    <g fill="none" fillRule="evenodd">
      <path d="M19.989.76a.848.848 0 0 0-.263-.49.845.845 0 0 0-.64-.27.854.854 0 0 0-.411.1L.495 9.19a.858.858 0 0 0-.413.426.92.92 0 0 0-.057.596.896.896 0 0 0 .88.696h8.182v8.182c0 .209.064.396.192.561a.857.857 0 0 0 .504.32c.095.018.166.028.213.028.379 0 .649-.165.81-.497l9.09-18.181a.865.865 0 0 0 .093-.56z" fill="#E2E2E2" />
      <text fontSize="18" fill="#E1E1E1" transform="translate(0 -3)">
        <tspan x="30" y="19">Try moving your cursor</tspan>
      </text>
    </g>
  </svg>
);
/* eslint-enable max-len */

export default withCSSModules(InteractionReminder, styles);
