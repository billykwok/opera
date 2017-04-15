import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGKeyboardDrawingPadTrackpad = ({ dX, dY }) => {
  const x = 416 + 15 - dX * 0.8;
  const y = 160 + 180 - dY * 0.8;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <path fill="#000" d="M54 15h32v2H54z" />
      <path fill="#AFAFAF" d="M83 5h1v9h-1z" />
      <path fill="#272727" d="M83 0h2v2l-1 4-1-1z" />
      <path fill="#646464" d="M83 14h1l1 1h-3z" />
      <path fill="#DBDAD2" d="M0 15h52v2H0z" />
      <path d="M49 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M47 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M45 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M43 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M41 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M39 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M37 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M35 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M33 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M15 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M13 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M11 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5h-2z" fill="#EFEFEF" />
      <path d="M9 15c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5H9zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5H7zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5H5zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5H3zm-2 0c0-.276.214-.5.505-.5h.99c.279 0 .505.227.505.5H1z" fill="#EFEFEF" />
      <path d="M88.494 17c-.273 0-.375-.179-.216-.417l1.444-2.166c.153-.23.504-.417.774-.417h15.008c.274 0 .615.179.774.417l1.444 2.166c.153.23.053.417-.216.417H88.494z" fill="#F4F4F4" />
      <path fill="#E6E6E6" d="M89.25 16.5l1.25-2h15l1.25 2z" />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGKeyboardDrawingPadTrackpad.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGKeyboardDrawingPadTrackpad;
