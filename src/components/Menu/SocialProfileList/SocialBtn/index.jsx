import React, { PropTypes } from 'react';

import './styles.scss';

const SocialBtn = ({ url, children }) => (
  <a styleName="SocialBtn" href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

SocialBtn.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default SocialBtn;
