// @flow
import React from 'react';
import styled from 'styled-components';
import connect from 'react-redux/lib/connect/connect';

import Logo from '../Logo';
import TextInput from '../TextInput';
import Visualizer from '../Visualizer';

type PropsType = {
  height: number
};

const Layout = styled.div`
  background-color: #35577c;
  height: ${props => props.height}px;
`;

const App = (props: PropsType): React.Element<any> => (
  <Layout height={props.height}>
    <Visualizer />
    <TextInput />
    <Logo />
  </Layout>
);

function mapStateToProps(state) {
  return { height: state.deviceSpec.windowHeight + 120 };
}

export default connect(mapStateToProps)(App);
