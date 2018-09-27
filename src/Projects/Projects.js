import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ProjectCard from './ProjectCard.js';
import './Projects.css';

import ClosetRouletteImage from '../media/images/closet-roulette.png';

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
        <div className="page-body project-body">
         <ProjectCard 
          image={ClosetRouletteImage}
         />
         <ProjectCard />
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default Projects;