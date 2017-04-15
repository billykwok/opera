import React, { PropTypes } from 'react';

/* eslint-disable max-len */
const SVGFacebook = ({ mode = 'square' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <title>Facebook Icon</title>
    <g fill="none" fillRule="evenodd">
      {
        mode === 'square' ?
          <path d="M22.669 23.99c.728 0 1.321-.593 1.321-1.321V1.32c0-.727-.593-1.32-1.32-1.32H1.32C.593 0 0 .593 0 1.321V22.66c0 .728.593 1.321 1.321 1.321H22.67v.01z" fill="#3C5A99" /> : null
      }
      <path transform={`translate(${mode === 'fOnly' ? '-3 -2' : '0 0'})`} d="M16.557 23.99v-9.294h3.119l.467-3.622h-3.586v-2.31c0-1.052.287-1.762 1.797-1.762h1.915V3.766c-.333-.045-1.474-.144-2.795-.144-2.769 0-4.656 1.69-4.656 4.782v2.67H9.69v3.622h3.128v9.294h3.739z" fill="#FFF" />
    </g>
  </svg>
);
/* eslint-enable max-len */

SVGFacebook.propTypes = { mode: PropTypes.oneOf(['square', 'fOnly']) };

export default SVGFacebook;
