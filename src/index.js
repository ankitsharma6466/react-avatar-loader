import React from 'react';
import PropTypes from "prop-types"
import Avatar from './avatar'

class ImageLoader extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Avatar/>
    );
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

ImageLoader.defaultProps = {
  fallback: <Avatar/>
};

export default ImageLoader;