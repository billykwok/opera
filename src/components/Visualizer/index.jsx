// @flow
import React from 'react';
import styled from 'styled-components';

import PlaybackScheduler from '../../utils/PlaybackScheduler';
import NoteCircle from './NoteCircle';

const Canvas = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  overflow: hidden;
`;

const instrumentColor = {
  piano: '#40A7B7',
  celesta: '#CFAF4A',
  swell: '#5FAC56'
};

type PropsType = {
  height: number
};

type StateType = {
  activeSoundPieces: Array<?SoundPiece>
};

class Visualizer extends React.Component<*, PropsType, StateType> {
  state = { activeSoundPieces: new Array(20).fill(null) };

  componentDidMount() {
    PlaybackScheduler.Subject.subscribe({
      next: (soundPiece: SoundPiece) => {
        this.setState((prevState) => {
          const newSoundPieces = prevState.activeSoundPieces;
          newSoundPieces[this.pointer] = soundPiece;
          this.pointer = this.pointer >= 19 ? 0 : this.pointer + 1;
          return { activeSoundPieces: newSoundPieces };
        });
      }
    });
  }

  pointer: number = 0;

  render() {
    return (
      <Canvas height={this.props.height}>
        {this.state.activeSoundPieces.map(
          (s: ?SoundPiece) =>
            s &&
            <NoteCircle
              key={`${s.instrument}_${s.note}_${s.delay}`}
              color={instrumentColor[s.instrument]}
              desc={`${s.note} in ${s.instrument}`}
            />
        )}
      </Canvas>
    );
  }
}

export default Visualizer;
