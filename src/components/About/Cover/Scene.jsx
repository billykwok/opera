import React, { PropTypes } from 'react';

import SVGCloudFront1 from './SVGCloudFront1';
import SVGCloudFront2 from './SVGCloudFront2';
import SVGFloor from './SVGFloor';
import SVGDoorThermostatSwitch from './SVGDoorThermostatSwitch';
import SVGUmbrella from './SVGUmbrella';
import SVGShelf from './SVGShelf';
import SVGLampPen from './SVGLampPen';
import SVGHeadphoneDisplay from './SVGHeadphoneDisplay';
import SVGSpeakerLaptop from './SVGSpeakerLaptop';
import SVGKeyboardDrawingPadTrackpad from './SVGKeyboardDrawingPadTrackpad';
import SVGSmartphoneSmartwatch from './SVGSmartphoneSmartwatch';
import SVGVRHeadsetCup from './SVGVRHeadsetCup';
import SVGDeskTrashBinBackpack from './SVGDeskTrashBinBackpack';
import SVGDartFramePoster from './SVGDartFramePoster';
import SVGPrintersHoverboardGuitar from './SVGPrintersHoverboardGuitar';
import SVGAmplifierPiano from './SVGAmplifierPiano';
import SVGWindow from './SVGWindow';
import SVGLight from './SVGLight';
import SVGChair from './SVGChair';
import SVGSlogan from './SVGSlogan';
// import './style.scss';

const viewBoxMap = {
  xs: '190 120 640 420',
  sm: '-20 40 920 560',
  md: '-20 40 920 560',
  lg: '-30 -20 1200 560',
  xl: '-30 -20 1200 560',
  default: '-30 -20 1200 560'
};

/* eslint-disable max-len */
const Scene = ({ size, mouseX, mouseY }) => (
  <div styleName="Scene">
    <div styleName="Entities">
      <svg
        id="cover"
        width="100%"
        viewBox={size in viewBoxMap ? viewBoxMap[size] : viewBoxMap.default}
      >
        <defs>
          <linearGradient x1="0%" y1="100%" y2="50%" id="a">
            <stop stopColor="#FFF" stopOpacity="0" offset="25%" />
            <stop stopColor="#FFE200" stopOpacity=".25" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
            <stop stopColor="#FF4100" offset="0%" />
            <stop stopColor="#FF9F2A" offset="100%" />
          </linearGradient>
          <clipPath id="c">
            <rect x="12" y="16" width="244" height="128" fill="white" />
          </clipPath>
        </defs>
        <SVGFloor size={size} dX={mouseX} dY={mouseY} />
        <SVGDoorThermostatSwitch size={size} dX={mouseX} dY={mouseY} />
        <SVGUmbrella size={size} dX={mouseX} dY={mouseY} />
        <SVGShelf size={size} dX={mouseX} dY={mouseY} />
        <SVGLampPen size={size} dX={mouseX} dY={mouseY} />
        <SVGHeadphoneDisplay size={size} dX={mouseX} dY={mouseY} />
        <SVGSpeakerLaptop size={size} dX={mouseX} dY={mouseY} />
        <SVGKeyboardDrawingPadTrackpad size={size} dX={mouseX} dY={mouseY} />
        <SVGSmartphoneSmartwatch size={size} dX={mouseX} dY={mouseY} />
        <SVGVRHeadsetCup size={size} dX={mouseX} dY={mouseY} />
        <SVGDeskTrashBinBackpack size={size} dX={mouseX} dY={mouseY} />
        <SVGDartFramePoster size={size} dX={mouseX} dY={mouseY} />
        <SVGPrintersHoverboardGuitar size={size} dX={mouseX} dY={mouseY} />
        <SVGAmplifierPiano size={size} dX={mouseX} dY={mouseY} />
        <SVGWindow size={size} dX={mouseX} dY={mouseY} />
        <SVGLight size={size} dX={mouseX} dY={mouseY} />
        <SVGChair size={size} dX={mouseX} dY={mouseY} />
        <SVGSlogan size={size} dX={mouseX} dY={mouseY} />
        <SVGCloudFront1 size={size} dX={mouseX} dY={mouseY} />
        <SVGCloudFront2 size={size} dX={mouseX} dY={mouseY} />
      </svg>
    </div>
  </div>
);
/* eslint-enable max-len */

Scene.propTypes = {
  size: PropTypes.string.isRequired,
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired
};

export default Scene;
