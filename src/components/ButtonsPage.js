/**
 * Buttons Page
 * @AUTHOR Ian Sayre 03/35/16
*/

import React, { Component } from 'react';
import Button from './Button.js';

class ButtonsPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-12">
        <h1 className="page-header">Buttons </h1>
        <p className="lead">
          These are some test buttons that can be used throughout the dashboard. Colors, sizes & code for buttons:
        </p>
        <h2 className="sub-header">Default Buttons</h2>
        <div className="table-responsive">
          <h5>Testing default (white) button hover states</h5>
          <div className="margin-t20-b10">
            <Button size="large" label="Button" submit/>
            <Button label="Button" submit/>
            <Button size="small" label="Button" submit/>
            <pre class="margin-t20-b10">
              &lt;button class=&quot;btn-large btn-default&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
              &lt;button class=&quot;btn btn-default&quot; type=&quot;submit&quot;>Button&lt;/button&gt;
              &lt;button class=&quot;btn-small btn-default&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
            </pre>
          </div>
        </div>
        <h2 className="sub-header">Blue Buttons</h2>
        <div className="table-responsive">
          <h5>Testing blue button hover states</h5>
          <div className="margin-t20-b10">
            <Button size="large" className="btn-blue_02" label="Button" submit/>
            <Button className="btn-blue" label="Button" submit/>
            <Button size="small" className="btn-blue_02" label="Button" submit/>
            <pre class="margin-t20-b10">
              &lt;button class=&quot;btn-large btn-default btn-blue_02&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
              &lt;button class=&quot;btn btn-default btn-blue&quot; type=&quot;submit&quot;>Button&lt;/button&gt;
              &lt;button class=&quot;btn-small btn-default btn-blue_02&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
            </pre>
          </div>
        </div>
        <h2 className="sub-header">Green Buttons</h2>
        <div className="table-responsive">
          <h5>Testing green button hover states</h5>
          <div className="margin-t20-b10">
            <Button size="large" className="btn-green" label="Button" submit/>
            <Button className="btn-green_02" label="Button" submit/>
            <Button size="small" className="btn-green" label="Button" submit/>
            <pre class="margin-t20-b10">
              &lt;button class=&quot;btn-large btn-default btn-green&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
              &lt;button class=&quot;btn btn-default btn-green_02&quot; type=&quot;submit&quot;>Button&lt;/button&gt;
              &lt;button class=&quot;btn-small btn-default btn-green&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsPage;
