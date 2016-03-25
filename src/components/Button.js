/**
 * BUTTON CLASS
 * @AUTHOR Ian Sayre 3/24/16
*/

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import DOMUtil from '../utils/DomUtil.js';

const buttonClass = 'btn';

function getButtonTypeClass(type, outline) {
  return outline ? `btn-${type}-outline` : `btn-${type}`;
}

function getButtonSizeClass(size) {
  return (size === 'large') ? 'btn-lg' : size === 'small' ? 'btn-sm' : null;
}

function getButtonBlockClass(block) {
  return block ? 'btn-block' : null;
}

class Button extends Component {
  static propTypes = {
    label: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'link']),
    clickId: PropTypes.any,
    outline: PropTypes.bool,
    block: PropTypes.bool,
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf([null, 'large', 'medium', 'small']),
    className: PropTypes.string
  };

  static defaultProps = {
    label: 'A Button',
    onClick: () => {},
    clickId: null,
    type: 'primary',
    outline: false,
    block: true,
    submit: false,
    disabled: false,
    size: null,
    className: ''
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { type, outline, size, block, className, submit, label, ...others } = this.props;

    const classes = classnames(
      buttonClass,
      getButtonTypeClass(type, outline),
      getButtonSizeClass(size),
      getButtonBlockClass(block),
      className
    );

    return (
      <button type={ submit ? 'submit' : 'button' } className={classes} {...others}>
        {label}
      </button>
    );
  }

  onClick() {
    this.props.onClick(this.props.clickId);
  }
}

export default Button;
