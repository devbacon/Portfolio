import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.nav = React.createRef();
    this.navItems = React.createRef();
    this.hamburger = React.createRef();

    this.state = {
      collapsed: true
    }
  }

  toggleNav = () => {
    this.setState({ collapsed: !this.state.collapsed });
    const delay = 250

    // Use delay for smooth animation
    if (this.state.collapsed) {
      this.navItems.current.style.top = '65px';
      this.hamburger.current.classList.toggle('change');
      setTimeout(() => {
        this.hamburger.current.classList.toggle('cross');
      }, delay);
    } else {
      this.navItems.current.style.top = '-65px';
      this.hamburger.current.classList.toggle('cross');
      setTimeout(() => {
        this.hamburger.current.classList.toggle('change');
      }, delay);
    }
  }
  
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">{this.props.title}</h1>
        <div className="header-nav">
          <div onClick={this.toggleNav} ref={this.hamburger}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
				  </div>
          <div className="nav-items" ref={this.navItems}>
            {this.state.collapsed ? null : this.props.navItems.map(item => (
              <Link to={item === 'Home' ? '' : item.toLowerCase()} key={item}>
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