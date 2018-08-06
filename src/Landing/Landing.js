import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    // Establish refs to edit elements
    this.lineOne = React.createRef();
    this.lineTwo = React.createRef();
    this.lineThree = React.createRef();
    this.lineFour = React.createRef();
  }

  componentDidMount() {
    this.updateWindowDesign();
    window.addEventListener('resize', this.updateWindowDesign);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDesign);
  }

  // Adapt angle and offset of lines based on view dimensions
  updateWindowDesign = () => {
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
      <div className="Landing">
        <div className="Header">
          <div className="Name">DEVON BACON</div>
          <div className="SubText">Web Developer / Software Engineer</div>
        </div>
        <div className="Line One" ref={this.lineOne}></div>
        <div className="Line Two" ref={this.lineTwo}></div>
      </div>
    );
  }
}

export default Landing;