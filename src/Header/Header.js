import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();
    this.nav = React.createRef();
    this.navItems = React.createRef();
    this.hamburger = React.createRef();

    this.state = {
      collapsed: true
    }
  }

  componentDidMount() {
    setTimeout(() => { 
      this.header.current.style.marginTop = 0 
    }, 50);

    setTimeout(() => { 
      this.props.overlay.current.style.background = 'none' 
    }, 500);
  }

  goTo = (path) => {
    this.toggleNav();
    this.props.overlay.current.style.background = '#383838';

    setTimeout(() => {
      this.header.current.style.marginTop = '-100px';
    }, 700);
    
    setTimeout(() => {
      this.props.history.push(`/${path}`);
    }, 1200);
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
      this.navItems.current.style.top = '-80px';
      this.hamburger.current.classList.toggle('cross');
      setTimeout(() => {
        this.hamburger.current.classList.toggle('change');
      }, delay);
    }
  }
  
  render() {
    return (
      <div className="header-container" ref={this.header}>
        <h1 className="header-title">{this.props.title}</h1>
        <div className="header-nav">
          <div onClick={this.toggleNav} ref={this.hamburger}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
				  </div>
          <div className="nav-items" ref={this.navItems}>
            {this.props.navItems.map(item => (
              <div key={item} onClick={() => this.goTo(item === 'Home' ? '' : item.toLowerCase())}>
                <h2 className="header-nav-item">{item}</h2>
              </div>
            ))}
          </div>
      
        </div>
      </div>
    );
  }
}

export default Header;