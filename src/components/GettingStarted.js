import React, { Component,PropTypes } from 'react';
import Table from './Table.js';
import TableCol from './TableCol.js';

class Started extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.rowObjectData = [
      {col1: 1001, col2: 'Lorem', col3: 'ipsum', col4: 'dolor', col5: 'sit'},
      {col1: 1002, col2: 'IPhone', col3: 'slow-carb', col4: 'squid keytar', col5: 'Bespoke'},
      {col1: 1003, col2: 'magna odio', col3: 'typewriter waistcoat', col4: 'moon', col5: 'flexitarian'},
      {col1: 1004, col2: 'disrupt skateboard', col3: 'kombucha hoodie', col4: 'Portland', col5: 'PBR&B'},
      {col1: 1005, col2: 'goth', col3: 'ipsum', col4: 'fingerstache', col5: 'sit'},
      {col1: 1006, col2: 'Lorem', col3: 'direct trade', col4: 'dolor', col5: 'wayfarers'},
      {col1: 1007, col2: 'echo park', col3: 'ipsum', col4: 'letterpress', col5: 'cliche'},
      {col1: 1008, col2: 'Lorem', col3: 'ipsum', col4: 'dolor', col5: 'sit'}
    ];
  }

  render() {
    return (
      <div>
        <div className="row placeholders">
          <h1 className="page-header">Getting Started</h1>
          <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <h2 className="sub-header">Section title</h2>
            <Table rowData={this.rowObjectData}>
              <TableColumn header label="Header" columnKey='col0'/>
            </Table>
        </div>
      </div>
    );
  }
}

export default Started;
