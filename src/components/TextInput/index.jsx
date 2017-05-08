// @flow
import React from 'react';
import styled from 'styled-components';

import PlaybackScheduler from '../../utils/PlaybackScheduler';

type DefaultPropsType = {
  height: number
};

type PropsType = {
  height: number
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
  padding: 0.5rem;
  box-sizing: border-box;
  width: 24rem;
  background-color: transparent;
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
  background: #6a9fd7;
  color: #fff;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Control = styled.div`
`;

export default class TextInput
  extends React.Component<DefaultPropsType, PropsType, StateType> {
  static defaultProps = { height: 1024 };
  state = { value: '' };

  onPlay = () => {
    PlaybackScheduler.play(this.state.value);
  };

  onStop = () => {
    PlaybackScheduler.stop();
  };

  handleChange = (event: SyntheticInputEvent) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <InputContainer>
        <TextArea
          rows={Math.floor(this.props.height / 40)}
          onChange={this.handleChange}
          placeholder="Type something here to see the magic..."
        />
        <Control>
          <CharCounter>
            Character Count: {this.state.value.length} / 10,000
          </CharCounter>
          <ControlBtn type="button" onClick={this.onPlay}>
            Play
          </ControlBtn>&nbsp;&nbsp;&nbsp;
          <ControlBtn type="button" onClick={this.onStop}>Stop</ControlBtn>
        </Control>
      </InputContainer>
    );
  }
}
