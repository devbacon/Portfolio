import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    // Establish refs to edit elements
    this.header = React.createRef();
    this.zoneOne = React.createRef();
    this.zoneTwo = React.createRef();
    this.aboutPageName = React.createRef();
    this.contactPageName = React.createRef();
    this.projectsPageName = React.createRef();

    this.zoneOneStyle = null;
    this.zoneTwoStyle = null;
  }

  componentDidMount() {
    this.renderLayout();
    window.addEventListener('resize', this.renderLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.renderLayout);
  }

  // Adapt line and word placement based on view dimensions
  renderLayout = () => {
    // Grab view dimensions plus line and word refs
    const width = window.innerWidth;
    const height = window.innerHeight;

    const zoneOneLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height / 2, 2));
    const zoneTwoLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height, 2))
    this.zoneOneStyle = this.zoneOne.current.style;
    this.zoneTwoStyle = this.zoneTwo.current.style;

    const aboutPageNameStyle = this.aboutPageName.current.style;
    const contactPageNameStyle = this.contactPageName.current.style;
    const projectsPageNameStyle = this.projectsPageName.current.style;

    // Calculate angel of lines
    const zoneOneAngle = Math.atan2(height / 2, width) * 180 / Math.PI;
    const zoneTwoAngle = Math.atan2(height, width / 2) * 180 / Math.PI;

    // Alter angle and offset of lines and words
    this.zoneOneStyle.transform = `translate(-50%) rotate(${zoneOneAngle}deg)`;
    this.zoneTwoStyle.left = `${width / 2}px`;
    this.zoneTwoStyle.transform = `translate(-50%) rotate(-${zoneTwoAngle}deg)`;
    this.zoneTwoStyle.marginLeft = `${width / 2}px`;
    
    aboutPageNameStyle.marginLeft = `${zoneOneLength / 2}px`;
    contactPageNameStyle.marginLeft = `${zoneOneLength - zoneOneLength / 8}px`;
    projectsPageNameStyle.marginLeft = `-${zoneTwoLength / 1.5}px`;
  }

  contactTransition = () => {
    
  }

  projectsTransition = () => {
    
  }

  render() {
    return (
      <div className="landing-container">
        <div className="landing-header">
          <div className="landing-name">DEVON BACON</div>
          <div className="landing-subText">Web Developer / Software Engineer</div>
        </div>
        <div className="zone zone-one" ref={this.zoneOne}>
          <h2 className="landing-pageName landing-about" onClick={this.aboutTransition} ref={this.aboutPageName}>About</h2>
          <h2 className="landing-pageName landing-contact" onClick={this.contactTransition} ref={this.contactPageName}>Contact</h2>
        </div>
        <div className="zone zone-two" ref={this.zoneTwo}>
          <h2 className="landing-pageName landing-projects" onClick={this.projectsTransition} ref={this.projectsPageName}>Projects</h2>
        </div>
      </div>
    );
  }
}

export default Landing;