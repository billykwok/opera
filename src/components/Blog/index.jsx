/* @flow */
import React from 'react';
import './styles.scss';

type PropTypes = {
  children?: Element<any>
};

const Blog = ({ children }: PropTypes): React.Element<any> => (
  <div styleName="container">
    <div styleName="postItem">
      <div>4 JANUARY, 2017</div>
      <h2>React Interview Questions</h2>
      <p>What happens when you call setState? The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component....</p>
      <p>More...</p>
    </div>
    <div styleName="postItem">
      <div>4 JANUARY, 2017</div>
      <h2>React Interview Questions</h2>
      <p>What happens when you call setState? The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component....</p>
      <p>More...</p>
    </div>
    <div styleName="postItem">
      <div>4 JANUARY, 2017</div>
      <h2>React Interview Questions</h2>
      <p>What happens when you call setState? The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component....</p>
      <p>More...</p>
    </div>
  </div>
);

export default Blog;
