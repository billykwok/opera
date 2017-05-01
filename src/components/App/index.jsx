// @flow
import React from 'react';
import styled from 'styled-components';
import connect from 'react-redux/lib/connect/connect';

import Logo from '../Logo';
import TextInput from '../TextInput';

type PropsType = {
  height: number
};

const NavBar = styled.div`
  padding: 0.5rem;
`;

const Layout = styled.div`
  background-color: #35577c;
  height: ${props => props.height}px;
`;

function mapStateToProps(state) {
  return { height: state.deviceSpec.windowHeight };
}

const App = (props: PropsType): React.Element<any> => (
  <Layout height={props.height + 120}>
    <NavBar><Logo /></NavBar>
    <TextInput height={props.height + 120} />
  </Layout>
);

export default connect(mapStateToProps)(App);
