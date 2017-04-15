/* @flow */
import React from 'react';
import './styles.scss';

type PT = { children?: Element<any> };

export const Layout = ({ children }: PT): React.Element<any> => (
  <div styleName="layout">{children}</div>
);

export const LeftCol = ({ children }: PT): React.Element<any> => (
  <div styleName="leftCol">{children}</div>
);

export const RightCol = ({ children }: PT): React.Element<any> => (
  <div styleName="rightCol"><div styleName="scrollable">{children}</div></div>
);
