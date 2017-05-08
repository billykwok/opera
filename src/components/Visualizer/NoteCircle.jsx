import React from 'react';
import styled, { keyframes } from 'styled-components';

const zoomInFadeOut = keyframes`
  from { transform: scale(0); opacity: 0.8; }
  to { transform: scale(5); opacity: 0; }
`;

const Circle = styled.div`
  position: fixed;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  left: ${props => props.x - props.radius}px;
  top: ${props => props.y - props.radius}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: ${props => props.radius * 2}px;
  animation: 6s ease-out 0s 1 ${zoomInFadeOut};
  transform: scale(5);
  opacity: 0;
`;

export default class NoteCircle extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Circle
        radius={80}
        x={Math.random() * window.innerWidth}
        y={Math.random() * window.innerHeight}
        color={this.props.color}
      >
        {this.props.desc}
      </Circle>
    );
  }
}
