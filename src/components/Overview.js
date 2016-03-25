import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Overview</h1>
        <div className="col-xs-24 col-sm-12">
          <p className="lead">Opera Mediaworks uses a color palette that has been specially designed to provide a consistent brand presence. lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, mi sed ornare aliquet, ipsum magna maximus leo, sed aliquam ex ligula et diam. Morbi augue lectus, tempus eget libero ut, tincidunt ultricies nisl. Pellentesque at nisl dignissim leo aliquet tincidunt. Curabitur felis nisl, interdum nec congue a, ultrices et erat. Sed tempor dolor sapien, ut egestas felis faucibus nec. Donec sollicitudin quis sapien malesuada interdum. </p>
        </div>
        <h2 className="sub-header">Design Principles</h2>
        <h5>We keep the following principles in mind when making design decisions:</h5>
        <div className="table-responsive">
          <div className="row placeholders">
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Overview;
