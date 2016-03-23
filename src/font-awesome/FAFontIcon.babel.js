/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';

class FAFontIcon extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <i className={`fa fa-${this.props.icon}`}></i>
    );
  }
}

export default FAFontIcon;