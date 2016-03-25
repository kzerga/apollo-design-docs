/**
 * Table Template Component
 * @RETURNS functions to build tables
 * @AUTHOR Ian Sayre 03/24/16
*/


import React, { Component, PropTypes, Children } from 'react';

const renderColumn = (rowData, value, row, col, columnProps) => {
  value = value || null;

  let child = null;
  if(Children.count(columnProps.children) === 1) {
    child = Children.only(columnProps.children);

    const childProps = child.props;
    const newProps = {};

    const childPropKeys = Object.keys(childProps);
    for(let key of childPropKeys) {
      if(typeof childProps[key] === 'function') {
        newProps[key] = childProps[key].bind(null, rowData, columnProps.columnKey || col);
      }
    }
    newProps.value = value;
    child = React.cloneElement(child, newProps);
  }

  return columnProps.header ?
    <th key={`row${row}col${col}`}>{child || value}</th> :
    <td key={`row${row}col${col}`}>{child || value}</td>
    ;
};

const renderColumnsFromArray = (columnDetails, rowArr, rowIndex) =>
  columnDetails.map(
    (columnProps, index) => renderColumn(
      rowArr, rowArr[index], rowIndex, index, columnProps
    )
  )
;

const renderColumnsFromObject = (columnDetails, rowObj, rowIndex) =>
  columnDetails.map(
    (columnProps, key) => renderColumn(
      rowObj, rowObj[columnProps.columnKey], rowIndex, key, columnProps
    )
  )
;

class TableTemplate extends Component {
  static propTypes = {
    rowData: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
      ])
    ),
    onHeaderClick: PropTypes.func
  };

  static defaultProps = {
    rowData: [],
    onHeaderClick: () => {}
  };

  render() {
    return (
      <table className="table table-striped">
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    );
  }

  renderHeader() {
    let index = 0;
    const columns = Children.map(this.props.children, (child) => {
      const onClick =
        this.props.onHeaderClick.bind(null, child.props.columnKey || index, child.props.type);
      index++;
      return <th onClick={onClick}>{child.props.label}</th>;
    });

    return (
      <thead>
        <tr>
          {columns}
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
        {this.renderRows()}
      </tbody>
    )
  }

  renderRows() {
    const {rowData} = this.props;
    if(rowData.length === 0) return null;

    const rowRenderer = Array.isArray(rowData[0]) ?
      renderColumnsFromArray : renderColumnsFromObject;

    const columnDetails = this.getColumnDetails();

    return rowData.map(
      (row, index) => <tr key={`row${index}`}>{rowRenderer(columnDetails, row, index)}</tr>
    );
  }

  getColumnDetails() {
    return Children.map(this.props.children, (child) => {
      return child.props;
    });
  }
}

export default TableTemplate;
