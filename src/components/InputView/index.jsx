// @flow
import React from 'react';
import styled from 'styled-components';
import connect from 'react-redux/lib/connect/connect';

import store from '../../redux/store';
import { updateScheme } from '../../redux/actions';
import schemeMap from '../../utils/schemeMap';
import PlaybackScheduler from '../../utils/PlaybackScheduler';

type PropsType = {
  height: number,
  playerState: string,
  scheme: string
};

type StateType = {
  value: string
};

const InputContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 120px;
  margin: 1rem;
  padding: 1rem;
  color: #fff;
  background: rgba(12, 25, 41, 0.7);
`;

const TextArea = styled.textarea`
  padding: 1rem;
  box-sizing: border-box;
  width: 24rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  border: none;
  font-size: 1.125rem;
  resize: none;
  &::placeholder {
    color: #cdcdcd;
  }
`;

const CharCounter = styled.p`
  margin: 0.5rem 0 0.75rem;
`;

const ControlBtn = styled.button`
  border: 0;
  background-color: #6a9fd7;
  color: #fff;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:disabled {
    background-color: rgba(100, 131, 164, 0.5);
    color: #a1a1a1;
    cursor: not-allowed;
  }
`;

const ControlRow = styled.div`
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.25rem;
  margin-bottom: 1rem;
`;

function onSelectScheme(event) {
  store.dispatch(updateScheme(event.target.value));
}

class InputView extends React.Component<*, PropsType, StateType> {
  state = { value: '' };

  onPlay = () => {
    if (this.props.playerState === 'Stopped') {
      PlaybackScheduler.play(this.state.value, this.props.scheme);
    }
  };

  onStop = () => {
    if (this.props.playerState === 'Playing') PlaybackScheduler.stop();
  };

  handleChange = (event: SyntheticInputEvent) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <InputContainer>
        <TextArea
          rows={Math.floor(this.props.height / 50)}
          onChange={this.handleChange}
          placeholder="Type something here to see the magic..."
        />
        <ControlRow>
          <CharCounter>
            Character Count:
            {' '}
            {this.state.value.length}
            {' '}
            / 10,000 &nbsp;&nbsp;&nbsp; State:
            {' '}
            {this.props.playerState}
          </CharCounter>
        </ControlRow>
        <ControlRow>
          <Select value="scheme_Pentatonic_GB" onChange={onSelectScheme}>
            {Object.keys(schemeMap).map(groupLabel => (
              <optgroup key={groupLabel} label={groupLabel}>
                {schemeMap[groupLabel].map(({ value, label }) => (
                  <option value={value}>{label}</option>
                ))}
              </optgroup>
            ))}
          </Select>
        </ControlRow>
        <ControlRow>
          <ControlBtn
            type="button"
            onClick={this.onPlay}
            disabled={this.props.playerState !== 'Stopped'}
          >
            Play
          </ControlBtn>&nbsp;&nbsp;&nbsp;
          <ControlBtn
            type="button"
            onClick={this.onStop}
            disabled={this.props.playerState !== 'Playing'}
          >
            Stop
          </ControlBtn>
        </ControlRow>
      </InputContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    height: state.deviceSpec.windowHeight + 120,
    playerState: state.playerState,
    scheme: state.scheme
  };
}

export default connect(mapStateToProps)(InputView);
