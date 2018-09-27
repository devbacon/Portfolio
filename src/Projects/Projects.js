import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ProjectCard from './ProjectCard.js';
import './Projects.css';

import ClosetRouletteImage from '../media/images/closet-roulette.png';

const closetRouletteData = {
  summary: <p>Closet Roulette is a virtual wardrobe used to upload images of clothing, transforming them into digital attire. It was built by a team of 4 fellow developers and I utilizing the MERN stack. We created a React front end that interfaces with our Mongo REST API backend. By leveraging the Cloudinary API we enabled lightning fast image upload and retrieval while our use of Passport allowed users to sign in with their Google, Facebook, and Github accounts. DevOps were my personal responsibility which allowed me to understand what it took to maintain a stable deployment of our web application.</p>,
  technology: <div>
    <p>
      - <span className="tech-name">Javacript</span> : Base language used across web app <br />
      - <span className="tech-name">React</span> : Library used for component creation<br />
      - <span className="tech-name">HTML</span> : Component layout<br />
      - <span className="tech-name">CSS</span> : Component styling<br />
      - <span className="tech-name">Reactstrap</span> : React version of component library<br />
      - <span className="tech-name">Node</span> : Back end environment<br />
      - <span className="tech-name">Express</span> : Node framework<br />
      - <span className="tech-name">Passport</span> : User authentication and OAuth<br />
      - <span className="tech-name">JWT</span> : Transfer data and manage user session<br />
      - <span className="tech-name">MongoDB</span> : Document database<br />
      - <span className="tech-name">Mongoose</span> : MongoDB extension<br />
    </p>
  </div>,
  experience: <p></p>
}

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
          summary={closetRouletteData.summary}
          technology={closetRouletteData.technology}
          image={ClosetRouletteImage}
         />
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default Projects;