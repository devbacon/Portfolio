import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ProjectCard from './ProjectCard.js';
import './Projects.css';

import ClosetRouletteImage from '../media/images/closet-roulette.png';
import PortfolioImage from '../media/images/portfolio.png';

const closetRouletteData = {
  summary: <div>
    <p>Closet Roulette is a virtual wardrobe used to upload images of clothing, transforming them into digital attire. After you have uploaded the clothing that you want, you can then have an outfit recommended to you based on selected categories. Each of these categories represents a type of clothing such as shirts, bottoms, or shoes.</p>
    <p>You can save outfits based on the recommendation or even fine-tune the items manually. All outfits can be stored in the outfit archive to be viewed at any time. This app also offers features such as date selection so that you can see when you have worn an outfit and when you plan to wear it again.</p>
  </div>,
  experience: <div>
    <p>A team of four developers and myself created this project in four short weeks. We were given nothing but a minimum viable product and a rough mock-up. Beyond that, we had to discuss what approach, best practices, and tech stacks would be best suited for the task. It took some time for us to get our bearings but eventually, we found our flow.</p>
    <p>After four weeks of learning on the fly and project iterations, both in design and functionality, we were able to create Closet Roulette. This experience taught me so much about team dynamics and cooperation that I will never forget.</p>
  </div>,
  technology: <div>
    <p>
      - <span className="tech-name">Javacript</span> : Base language used across entire app <br />
      - <span className="tech-name">React</span> : Library used for component creation<br />
      - <span className="tech-name">React Router</span> : React routing library<br />
      - <span className="tech-name">HTML</span> : Component layout<br />
      - <span className="tech-name">CSS</span> : Component styling<br />
      - <span className="tech-name">Reactstrap</span> : React version of component library<br />
      - <span className="tech-name">Node</span> : Back end environment<br />
      - <span className="tech-name">Express</span> : Node framework<br />
      - <span className="tech-name">Passport</span> : User authentication and OAuth<br />
      - <span className="tech-name">Bcrypt</span> : User data encryption<br />
      - <span className="tech-name">JWT</span> : Transfer data and manage user session<br />
      - <span className="tech-name">MongoDB</span> : Document database<br />
      - <span className="tech-name">Mongoose</span> : MongoDB extension<br />
      - <span className="tech-name">Axios</span> : Request JSON info from database<br />
      - <span className="tech-name">Cloudinary</span> : Image storage<br />
      - <span className="tech-name">Stripe</span> : Payment Integration<br />
      - <span className="tech-name">Sendgrid</span> : Email verification and notice<br />
      - <span className="tech-name">Heroku</span> : Deployment platform<br />
    </p>
  </div>
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
          experience={closetRouletteData.experience}
          technology={closetRouletteData.technology}
          image={ClosetRouletteImage}
          link={"https://www.closetroulette.com/"}
         />
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default Projects;