import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();

    this.overlay = React.createRef();
  }

  render() {
    return (
      <div className="page-container">
        <Header 
          title="Projects" 
          navItems={["Home", "About", "Contact"]} 
          overlay={this.overlay}
          history={this.props.history}
        />
        <div className="page-body">
         <h1>TESTING!!!</h1>
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default Projects;