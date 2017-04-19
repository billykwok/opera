// @flow
import React from 'react';
import styled from 'styled-components';
import AutosizeTextArea from 'react-autosize-textarea';

import Logo from '../Logo';

const NavBar = styled.div`
  padding: 0.5rem;
`;

const InputContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const TextArea = styled(AutosizeTextArea)`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 40rem;
  font-size: 1rem;
`;

const Layout = styled.div`
  background-color: #213753;
  width: 100%;
`;

const App = (): React.Element<any> => (
  <Layout>
    <NavBar>
      <Logo />
    </NavBar>
    <InputContainer>
      <p style={{ color: '#ebebeb' }}>
        Type something here to see the magic...
      </p>
      <TextArea rows={5} />
    </InputContainer>
  </Layout>
);

export default App;
