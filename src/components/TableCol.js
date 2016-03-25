import React, { Component, PropTypes } from 'react';

class TableCol extends Component {

  static propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.oneOf([ 'number', 'text', 'date', 'icon' ]),
    columnKey: PropTypes.string,
    header: PropTypes.bool,
    children: PropTypes.element
  };

  static defaultProps = {
    label: 'A Table Column',
    type: 'text',
    columnKey: null,
    header: false
  };

  render() {
    return null;
  }
}

export default TableCol;
