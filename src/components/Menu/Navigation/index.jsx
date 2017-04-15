// @flow
import React from 'react';
import Link from 'react-router-dom/Link';
import connect from 'react-redux/lib/connect/connect';
import { shouldNavigationAffix } from '../../../redux/selectors';

import './styles.scss';

type PT = { shouldAffix: boolean, };

function mapStateToProps(state): PT {
  return { shouldAffix: shouldNavigationAffix(state) };
}

class Navigation extends React.Component<void, PT, void> {
  props: PT;
  render() {
    /* eslint-disable react/prop-types */
    return (
      <ul
        styleName="Navigation"
        style={{
          position: this.props.shouldAffix ? 'fixed' : 'static',
          top: this.props.shouldAffix ? 0 : 'auto',
          width: this.props.shouldAffix ? '100%' : 'auto',
        }}
      >
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Navigation);
