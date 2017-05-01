// @flow
import React from 'react';
import styled from 'styled-components';

import Sound from '../../utils/loadAudio';

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
  padding: 1rem;
  color: #fff;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  box-sizing: border-box;
  width: 24rem;
  background-color: #233447;
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

export default class TextInput
  extends React.Component<DefaultPropsType, PropsType, StateType> {
  static defaultProps = { height: 1024 };
  state = { value: '' };

  onPlay = () => {
    Sound.c4.play();
    console.log(`Started with ${this.state.value}`);
  };

  onStop = () => {
    console.log(`Stopped with ${this.state.value}`);
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
        <div>
          <CharCounter>
            Character Count: {this.state.value.length} / 10,000
          </CharCounter>
          <ControlBtn type="button" onClick={this.onPlay}>
            Play
          </ControlBtn>&nbsp;&nbsp;&nbsp;
          <ControlBtn type="button" onClick={this.onStop}>Stop</ControlBtn>
        </div>
      </InputContainer>
    );
  }
}
