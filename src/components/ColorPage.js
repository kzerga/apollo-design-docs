/**
 * Color Page
 * @AUTHOR: Ian Sayre 03/25/16
*/

import React, { Component } from 'react';

class ColorPage extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-12">
          <p className="lead">Opera Mediaworks uses a color palette that has been specially designed to provide a consistent brand presence.</p>
        </div>
        <h2>Color Palette</h2>
        <div className="table-responsive">
          <h5>Opera Mediaworks uses warm-tones. Non fermentum eros finibus quis. Vestibulum porttitor magna ac eleifend sagittis. Sed pulvinar nunc mi, eu imperdiet ante dictum vitae.</h5>
          <div className="margin-t20-b10">
            <img src="../images/omw_colorpalette_01.png"/>
            <img src="../images/omw_colorpalette_02.png"/>
          </div>
        </div>
        <h2>Typography</h2>
        <div className="table-responsive">
            <h5>Font colors. Non fermentum eros finibus quis. Vestibulum porttitor magna ac eleifend sagittis. Sed pulvinar nunc mi, eu imperdiet ante dictum vitae.</h5>
            <div className="margin-t20-b10">
              <img src="../images/omw_colortype_01.png"/> <p>Basic Copy</p>
              <img src="../images/omw_colortype_02.png"/> <p>Messages</p>
              <img src="../images/omw_colortype_03.png"/> <p>Hyperlinks</p>
            </div>
          </div>
      </div>
    );
  }
}

export default ColorPage;
