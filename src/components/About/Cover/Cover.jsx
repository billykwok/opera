import React, { PropTypes } from 'react';
import Motion from 'react-motion/lib/Motion';
import spring from 'react-motion/lib/spring';
import connect from 'react-redux/lib/components/connect';
import _throttle from 'lodash/throttle';
import withCSSModules from 'react-css-modules';

import Scene from './Scene';
import PacmanSpinner from '../PacmanSpinner';
import NoScript from '../NoScript';
import InteractionReminder from './InteractionReminder';
import mapSizeToDimensions from '../../utils/mapSizeToCoverSceneDimensions';
import styles from './style.scss';

function mapStateToProps({ deviceSize, readyState }) {
  return { size: readyState.state === 'READY' ? deviceSize : 'unknown' };
}

class Cover extends React.Component {
  static propTypes = {
    size: PropTypes.string.isRequired
  };

  state = { mouseX: null, mouseY: null };

  componentDidMount() { this.resetMousePosition(); }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.mouseX !== nextState.mouseX ||
           this.state.mouseY !== nextState.mouseY ||
           this.props.size !== nextProps.size;
  }

  getDefaultMouseX = () => window.innerWidth / 2;
  getDefaultMouseY = () => mapSizeToDimensions(this.props.size).height / 2;

  setMousePos = _throttle(e => {
    this.setState({ mouseX: e.pageX, mouseY: e.pageY });
  }, 60);

  resetMousePosition = () => {
    this.setState({
      mouseX: this.getDefaultMouseX(),
      mouseY: this.getDefaultMouseY()
    });
  }

  handleMouseMove = (e) => { e.persist(); this.setMousePos(e); }

  handleMouseLeave = (e) => {
    e.persist();
    setTimeout(this.resetMousePosition, 200);
  }

  handleTouchMove = ({ touches }) => { this.handleMouseMove(touches[0]); }

  renderMotion = ({ mouseX, mouseY }) => {
    const { size } = this.props;
    const nMouseX = ((mouseX / window.innerWidth) - 0.5) * 32;
    const nMouseY = ((mouseY / mapSizeToDimensions(size).height) - 0.5) * 16;
    return (
      <Scene
        size={size}
        mouseX={nMouseX >= 1 || nMouseX <= -1 ? nMouseX : 0}
        mouseY={nMouseY >= 1 || nMouseY <= -1 ? nMouseY : 0}
      />
    );
  }

  renderIntereactiveScene() {
    return (
      <Motion
        defaultStyle={{
          mouseX: this.getDefaultMouseX(),
          mouseY: this.getDefaultMouseY()
        }}
        style={{
          mouseX: spring(this.state.mouseX),
          mouseY: spring(this.state.mouseY)
        }}
      >
        {this.renderMotion}
      </Motion>
    );
  }

  renderStaticScene() {
    return <Scene size={this.props.size} mouseX={0} mouseY={0} />;
  }

  render() {
    if (this.props.size === 'lg' || this.props.size === 'xl') {
      return (
        <div
          styleName="Cover"
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleMouseLeave}
        >
          {this.renderIntereactiveScene()}
          <InteractionReminder />
        </div>
      );
    } else if (this.props.size === 'xs' ||
      this.props.size === 'sm' ||
      this.props.size === 'md') {
      return (
        <div styleName="Cover">
          {this.renderStaticScene()}
        </div>
      );
    }
    return (
      <div styleName="Cover">
        <div styleName="Scene">
          <div styleName="NoScriptPlaceholder">
            <NoScript>
              <h3>Hi, I'm Billy Kwok. Welcome to my home!</h3>
              <p>Wonder what's happening here? Enable JavaScript.</p>
            </NoScript>
            <PacmanSpinner />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withCSSModules(Cover, styles));
