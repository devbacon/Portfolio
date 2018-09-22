import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    // Establish refs to edit elements
    this.lineOne = React.createRef();
    this.lineTwo = React.createRef();
    this.aboutPage = React.createRef();
    this.contactPage = React.createRef();
    this.projectsPage = React.createRef();
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

  // Adapt angle and offset of lines based on view dimensions
  renderLayout = () => {
    // Grab view dimensions and line refs
    const width = window.innerWidth;
    const height = window.innerHeight;
    const lineOneStyle = this.lineOne.current.style;
    const lineTwoStyle = this.lineTwo.current.style;

    // Calculate angel of lines
    const lineOneAngle = Math.atan2(height / 2 - 0, width - 0) * 180 / Math.PI;
    const lineTwoAngle = Math.atan2(height - 0, width /2 - width) * 180 / Math.PI;

    // Alter angle and offset
    lineOneStyle.transform = `translate(-50%) rotate(${lineOneAngle}deg)`;
    lineTwoStyle.left = `${width / 2}px`;
    lineTwoStyle.transform = `translate(-50%) rotate(${lineTwoAngle}deg)`;
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <div className="landing-name">DEVON BACON</div>
          <div className="landing-subText">Web Developer / Software Engineer</div>
        </div>
        <div className="line line-one" ref={this.lineOne}></div>
        <div className="line line-two" ref={this.lineTwo}></div>
        <h2 className="landing-about" ref={this.aboutPage}>About</h2>
        <h2 className="landing-contact" ref={this.contact}>Contact</h2>
        <h2 className="landing-projects" ref={this.projectsPage}>Projects</h2>
      </div>
    );
  }
}

export default Landing;