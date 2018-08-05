import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    // Establish refs to edit elements
    this.lineUpper = React.createRef();
    this.lineLower = React.createRef();
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
    const lineUpperStyle = this.lineUpper.current.style;
    const lineLowerStyle = this.lineLower.current.style;

    // Calculate angel of lines
    const lineUpperAngle = Math.atan2(height / 2 - 0, width - 0) * 180 / Math.PI;
    const lineLowerAngle = Math.atan2(0 - height, width - width / 2) * 180 / Math.PI;

    // Alter angle and offset
    lineUpperStyle.transform = `translate(-50%) rotate(${lineUpperAngle}deg)`;
    lineLowerStyle.left = `${width / 2}px`;
    lineLowerStyle.transform = `translate(-50%) rotate(${lineLowerAngle}deg)`;
  }

  render() {
    return (
      <div className="Landing">
        <div className="Name">DEVON BACON</div>
        <div className="Line Upper" ref={this.lineUpper}></div>
        <div className="Line Lower" ref={this.lineLower}></div>
      </div>
    );
  }
}

export default Landing;