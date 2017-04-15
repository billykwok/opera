/* @flow */
import React from 'react';

const InlineBlock = ({ children }: { children?: Element<any> }) => (
  <div style={{ display: 'inline-block' }}>{children}</div>
);

export default InlineBlock;
