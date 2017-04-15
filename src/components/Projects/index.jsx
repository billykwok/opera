/* @flow */
import React from 'react';
import './styles.scss';

type PropTypes = {
  children?: Element<any>
};

const Projects = ({ children }: PropTypes): React.Element<any> => (
  <div styleName="container">
    <h2>Projects</h2>
  </div>
);

export default Projects;
