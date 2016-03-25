/**
 * The Layout container
 * @AUTHOR Ian Sayre 03/24/16
*/

import React, { Component, PropTypes } from 'react';
import Navigation from './Nav.js';


class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navigation />
          <div id="main-container" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.children.props}
          </div>
        </div>
     </div>
    );
  }
}

export default AppLayout;
