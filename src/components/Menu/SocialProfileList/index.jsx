import React from 'react';

import InlineBlock from '../../Common/InlineBlock';
import SVGFacebook from '../../Common/SocialIcon/SVGFacebook';
import SVGTwitter from '../../Common/SocialIcon/SVGTwitter';
import SVGLinkedIn from '../../Common/SocialIcon/SVGLinkedIn';
import SVGAngelList from '../../Common/SocialIcon/SVGAngelList';
import SVGGitHub from '../../Common/SocialIcon/SVGGitHub';
import SVGDribbble from '../../Common/SocialIcon/SVGDribbble';
import SVGBehance from '../../Common/SocialIcon/SVGBehance';
import SVGMedium from '../../Common/SocialIcon/SVGMedium';
import SocialBtn from './SocialBtn';

import './styles.scss';

const SocialProfileList = () => (
  <div styleName="SocialProfileList">
    <InlineBlock>
      <SocialBtn url="https://fb.com/bhkkwok"><SVGFacebook /></SocialBtn>
      <SocialBtn url="https://twitter.com/bhkkwok"><SVGTwitter /></SocialBtn>
      <SocialBtn url="https://medium.com/@billykwok"><SVGMedium /></SocialBtn>
      <SocialBtn url="https://linkedin.com/in/bhkkwok"><SVGLinkedIn /></SocialBtn>
      <SocialBtn url="https://angel.co/billykwok"><SVGAngelList theme="dark" /></SocialBtn>
    </InlineBlock>
    <InlineBlock>
      <SocialBtn url="https://dribbble.com/billykwok"><SVGDribbble /></SocialBtn>
      <SocialBtn url="https://github.com/billykwok"><SVGGitHub theme="dark" /></SocialBtn>
      <SocialBtn url="http://be.net/billykwok"><SVGBehance theme="dark" /></SocialBtn>
    </InlineBlock>
  </div>
);

export default SocialProfileList;
