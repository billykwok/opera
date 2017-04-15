// @flow
import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Menu from '../Menu';
import { Layout, LeftCol, RightCol } from '../Layout';
import About from '../About';
import Projects from '../Projects';
import Blog from '../Blog';
import NoMatch from '../NoMatch';

import './reboot.scss';

const App = (): React.Element<any> => (
  <Layout>
    <LeftCol><Menu /></LeftCol>

    <RightCol>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </RightCol>
  </Layout>
);

export default App;
