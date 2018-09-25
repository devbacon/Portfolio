import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="page-container">
        <Header title="About" navItems={['Home', 'Contact', 'Projects']} />
        <div className="page-body">

        </div>
      </div>
    );
  }
}

export default About;