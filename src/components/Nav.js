/**
* NAV COMPONENT
* @AUTHOR Ian Sayre 03/23/16
*/

import React, { Component, PropTypes } from 'react';
import Link from './Link';

class Navigation extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(PropTypes.object)
    })).isRequired
  };

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
  }

  renderNavItems() {
    return (
      this.props.items.map(navItem => {
       let linkItem;

       if (!navItem.links) {
         linkItem = <li key={navItem.category}><a href={'/' + navItem.category} onCLick={Link.handleClick}>{navItem.category}</a></li>;
       } /*else {
         const subMenu = navItem.links.map(linkedPage => {
           return (
             <li key={linkedPage}><a href={'/' + linkedPage} onClick={Link.handleClick}>{linkedPage}</a></li>
           );
         });
         linkItem = <li key={navItem.Category} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}><a href="javascript:;" onClick={this.handleClick.bind(this)}><i className={classnames('fa', icon)}></i><span className="title">{navItem.Category}</span><i className={classnames(this.arrowClass())}></i></a><ul className="sub-menu">{subMenu}</ul></li>;
       }*/
       return linkItem;
      })
    );
  }

  render() {
    const items = [{category: 'overview'}, {category: 'buttons'}, {category: 'color'}, {category: 'typography'}];
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className = "nav nav-sidebar">
          {this.renderNavItems(items)}
        </ul>
      </div>
    );
  }
}
 export default Navigation;

