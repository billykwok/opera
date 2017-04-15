import React from 'react';
import Link from 'react-router-dom/Link';

import InlineBlock from '../Common/InlineBlock';
import SVGLogo from './SVGLogo';
import SocialProfileList from './SocialProfileList';
import Navigation from './Navigation';

import './styles.scss';

const Menu = () => (
  <div>
    <div styleName="Container">
      <Link to="/"><SVGLogo /></Link>
      <div styleName="Intro">
        <h2 styleName="Hello">
          Hi, I&#39;m&nbsp;
          <Link to="/" styleName="Name">Billy Kwok</Link>
        </h2>
        <div styleName="Role">
          <InlineBlock>A Startup Enthusiast /&nbsp;</InlineBlock>
          <InlineBlock>Growth Hacker /&nbsp;</InlineBlock>
          <InlineBlock>Designer / Developer</InlineBlock>
        </div>
        <div styleName="SocialProfile"><SocialProfileList /></div>
      </div>
    </div>
    <div style={{ height: '2.5rem' }}><Navigation /></div>
  </div>
);

export default Menu;
