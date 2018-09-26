import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component {
  constructor() {
    super();
    
    this.overlay = React.createRef();
  }

  render() {
    return (
      <div className="page-container">
        <Header 
          title="About" 
          navItems={['Home', 'Contact', 'Projects']} 
          overlay={this.overlay}
          history={this.props.history}
        />
        <div className="page-body" ref={this.pageBody}>
          <div className="about-col-left">
            <p></p>
          </div>
          <div className="about-col-right">
            <p></p>
          </div>
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default About;