import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    // Establish refs to edit elements
    // this.lineOne = React.createRef();
    // this.lineTwo = React.createRef();
    // this.aboutPageName = React.createRef();
    // this.contactPageName = React.createRef();
    // this.projectsPageName = React.createRef();

    // Establish refs to edit elements
    this.zoneOne = React.createRef();
    this.zoneTwo = React.createRef();
    this.aboutPageName = React.createRef();
    this.contactPageName = React.createRef();
    this.projectsPageName = React.createRef();
  }

  componentDidMount() {
    this.renderLayout();
    window.addEventListener('resize', this.renderLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.renderLayout);
  }

  transitionTest = () => {
    const lineOneStyle = this.lineOne.current.style;
    lineOneStyle.transform = `translate(-50%, 100px) rotate(0deg)`;
  }

  // Adapt line and word placement based on view dimensions
  renderLayout = () => {
    // // Grab view dimensions plus line and word refs
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    // const lineOneStyle = this.lineOne.current.style;
    // const lineTwoStyle = this.lineTwo.current.style;

    // // Calculate angel of lines
    // const lineOneAngle = Math.atan2(height / 2 - 0, width - 0) * 180 / Math.PI;
    // const lineTwoAngle = Math.atan2(height - 0, width /2 - width) * 180 / Math.PI;

    // // Alter angle and offset of lines and words
    // lineOneStyle.transform = `translate(-50%) rotate(${lineOneAngle}deg)`;
    // lineTwoStyle.left = `${width / 2}px`;
    // lineTwoStyle.transform = `translate(-50%) rotate(${lineTwoAngle}deg)`;

    // Grab view dimensions plus line and word refs
    const width = window.innerWidth;
    const height = window.innerHeight;
    const zoneOneStyle = this.zoneOne.current.style;
    const zoneTwoStyle = this.zoneTwo.current.style;


    // Calculate angel of lines
    const zoneOneAngle = Math.atan2(height / 2, width) * 180 / Math.PI;
    const zoneTwoAngle = Math.atan2(height, width / 2) * 180 / Math.PI;

    // Alter angle and offset of lines and words
    zoneOneStyle.transform = `translate(-50%, -100%) rotate(${zoneOneAngle}deg)`;
    zoneTwoStyle.left = `${width / 2}px`;
    zoneTwoStyle.transform = `translate(-50%) rotate(-${zoneTwoAngle}deg)`;
    zoneTwoStyle.marginLeft = `${width / 2}px`;

   
  }

  render() {
    return (
      <div className="landing-container">
        <div className="landing-header">
          <div className="landing-name">DEVON BACON</div>
          <div className="landing-subText">Web Developer / Software Engineer</div>
        </div>
        {/* <div className="line line-one" ref={this.lineOne}></div>
        <div className="line line-two" ref={this.lineTwo}></div>
        <div className="landing-about-container">
          <h2 className="landing-about" ref={this.aboutPageName}>About</h2>
        </div>
        <div className="landing-contact-container">
          <h2 className="landing-contact" ref={this.contactPageName}>Contact</h2>
        </div>
        <div className="landing-projects-container">
          <h2 className="landing-projects" ref={this.projectsPageName}>Projects</h2>
        </div> */}

        <div className="zone zone-one" ref={this.zoneOne}>
          <h2 className="landing-about" ref={this.aboutPageName}>About</h2>
          <h2 className="landing-contact" ref={this.contactPageName}>Contact</h2>
        </div>
        <div className="zone zone-two" ref={this.zoneTwo}>
          <h2 className="landing-projects" ref={this.projectsPageName}>Projects</h2>
        </div>
      </div>
    );
  }
}

export default Landing;