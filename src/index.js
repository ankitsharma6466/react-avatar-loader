import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './avatar';

class AvatarLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSource: null,
    };
  }
  componentDidMount() {
    this.imageObj = new window.Image();
    this.initiateLoad();
  }
  componentWillReceiveProps(next) {
    if (next.src !== this.props.src) {
      this.initiateLoad();
    }
  }
  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
      this.image = null;
    }
  }
  initiateLoad() {
    this.imageObj.onload = () => {
      // image loaded success fully
      this.setState({
        currentSource: this.props.src,
      });
    };
    this.imageObj.onerror = () => {
      // do nothing
      console.error('Image load error, sticking to fallback avatar');
    };
    this.imageObj.src = this.props.src;
  }
  render() {
    const { className, style } = this.props;
    return (
      this.state.currentSource
        ? <img className={className} style={style} src={this.state.currentSource} />
        : <Avatar className={className} style={style} />
    );
  }
}

AvatarLoader.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

AvatarLoader.defaultProps = {
  src: null,
  style: {},
  className: '',
};

export default AvatarLoader;
