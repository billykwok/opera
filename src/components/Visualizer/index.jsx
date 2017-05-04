// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

type PropsType = {
  height: number
};

const Canvas = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`;

const zoomInFadeOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(5); opacity: 0; }
`;

const Circle = styled.div`
  position: absolute;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  left: ${props => props.x - props.radius}px;
  top: ${props => props.y - props.radius}px;
  border-radius: 50%;
  background-color: #51759c;
  animation: 1s ease-out 0s 1 ${zoomInFadeOut};
  transform: scale(5);
  opacity: 0;
`;

const NoteCircle = (): React.Element<any> => (
  <Circle radius={80} x={50} y={50} />
);

const Visualizer = (props: PropsType): React.Element<any> => (
  <Canvas height={props.height}>
    {new Array(5).fill(null).map((_, i) => <NoteCircle key={i} />)}
  </Canvas>
);

export default Visualizer;
