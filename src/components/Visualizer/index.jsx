// @flow
import React from 'react';
import styled from 'styled-components';
import connect from 'react-redux/lib/connect/connect';

import PlaybackScheduler from '../../utils/PlaybackScheduler';
import NoteCircle from './NoteCircle';

const Canvas = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  overflow: hidden;
`;

const Placeholder = styled.div`
  position: absolute;
  right: 50%;
  top: 18rem;
  margin-right: -24rem;
  width: 24rem;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const instrumentColor = {
  piano: '#40A7B7',
  celesta: '#e2c468',
  swell: '#5FAC56',
  animalbg: '#6639c4',
  animalhigh: '#e07290',
  animalmid: '#1ab372',
  animallow: '#4077e0',
  chimeswell: '#8cd25a',
  clav: '#60b9b9',
  colossalsynthbass: '#889e94',
  darkchords: '#2d202e',
  dirtyfifth: '#4a7773',
  fluteorgan: '#e3e2e0',
  plucksynthbass: '#81acd7',
  shortplucksynth: '#a356aa'
};

type PropsType = {
  height: number,
  playerState: string
};

type StateType = {
  activeSoundPieces: Array<?SoundPiece>
};

class Visualizer extends React.Component<*, PropsType, StateType> {
  state = { activeSoundPieces: new Array(40).fill(null) };

  componentDidMount() {
    PlaybackScheduler.Subject.subscribe({
      next: (soundPiece: SoundPiece) => {
        this.setState((prevState) => {
          const newSoundPieces = prevState.activeSoundPieces;
          newSoundPieces[this.pointer] = soundPiece;
          this.pointer = this.pointer >= 39 ? 0 : this.pointer + 1;
          return { activeSoundPieces: newSoundPieces };
        });
      }
    });
  }

  pointer: number = 0;

  render() {
    return (
      <Canvas height={this.props.height}>
        {this.props.playerState !== 'Playing' &&
          <Placeholder>
            Type your favorite piece of text on the left hand side.
            Click the &quot;Play&quot; button and see the magic!
          </Placeholder>}
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

function mapStateToProps(state) {
  return {
    height: state.deviceSpec.windowHeight,
    playerState: state.playerState
  };
}

export default connect(mapStateToProps)(Visualizer);
