/* @flow */
import React from 'react';

type PropTypes = {
  location: Object
};

const NoMatch = ({ location }: PropTypes) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

export default NoMatch;
