/**
 * Table Component
 * @RETURNS functions to build tables
 * @AUTHOR Ian Sayre 03/24/16
*/


import React, { Component, PropTypes, Children } from 'react';
import TableTemplate from './TableTemplate.js';

class Table extends Component {
  static propTypes = {
    rowData: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
      ])
    ),

    onHeaderClick: PropTypes.func,

    filter: PropTypes.func,
    sort: PropTypes.func
  };

  static defaultProps = {
    rowData: [],

    onHeaderClick: () => {},

    filter: () => true,
    sort: null
  };

  render() {
    const {rowData, filter, sort, ...others} = this.props;

    const filteredRows = filter ? rowData.filter(filter) : rowData;
    const sortedRows = sort ? filteredRows.sort(sort) : filteredRows;

    return (
      <TableTemplate {...others} rowData={sortedRows}>
        {this.props.children}
      </TableTemplate>
    );
  }
}

export default Table;
