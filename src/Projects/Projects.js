import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="page-container">
        <Header title="Projects" navItems={["Home", "About", "Contact"]} history={this.props.history}/>
        <div className="page-body">

        </div>
      </div>
    );
  }
}

export default Projects;