import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.nav = React.createRef();

    this.state = {
      collapsed: true
    }
  }
  
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">{this.props.title}</h1>
        <div className="header-nav">
          <div className="nav-hamburger" onClick={this.toggleNav}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
				  </div>
          <div className="nav-items">
            {this.state.collapsed ? null : this.props.navItems.map(item => (
              <Link to={item === 'Home' ? '' : item.toLowerCase()}>
                <h2 className="header-nav-item">{item}</h2>
              </Link>
            ))}
          </div>
      
        </div>
      </div>
    );
  }
}

export default Header;