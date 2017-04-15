/* @flow */
import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import multiIncludes from '../../../utils/multiIncludes';
import { getDeviceType } from '../../../redux/selectors';

type PT = {
  deviceType: string,
  targetDeviceTypes: string | Array<string>,
  isSVG: boolean,
  children?: Element<any>
};

function mapStateToProps(state: Object): Object {
  return { deviceType: getDeviceType(state) };
}

const OnlyFor = ({ deviceType, targetDeviceTypes, isSVG, children }: PT) => {
  const targetDeviceTypeArray = Array.isArray(targetDeviceTypes) ?
    targetDeviceTypes : [targetDeviceTypes];
  if (!multiIncludes(deviceType, targetDeviceTypeArray)) return null;
  if (React.Children.count(children) === 1) return children;
  return isSVG ? <g>{children}</g> : <div>{children}</div>;
};

export default connect(mapStateToProps)(OnlyFor);
