import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component {
  constructor() {
    super();

    this.overlay = React.createRef();
  }

  render() {
    return (
      <div className="page-container">
        <Header 
          title="About" 
          navItems={['Home', 'Contact', 'Projects']} 
          overlay={this.overlay}
          history={this.props.history}
        />
        <div className="page-body" ref={this.pageBody}>
          <p>
            Hello. My name is Devon Bacon and I am a programmer with a passion for web development here in the San Francisco Bay area.
          </p>
          <p>
            I have been on the computer for what seems like my entire life tinkering with programs and playing games. It was in mid-2016 that I really began to delve into and understand what programs were composed of. These symbols and structures that translated into machine-readable bits and then into pulses of energy within the computer's hardware. This knowledge is what sparked my curiosity in the creation of software and continues to drive me toward perfecting my trade.
          </p>
          <p>
            Before I began pursuing my passion for technology I was a roadway construction worker. My primary jobs were freeway traffic control and underground utility identification. I left that position after five years to become a self-employed dog trainer. Both of these occupations relied heavily on communication and problem-solving in very different ways.
          </p>
          <p>
            Lambda School helped me to adapt my previous skills to the world of software development. During my six months there I was taught the fundamentals of computer science and built demo applications using a variety of technologies with an emphasis on the MERN stack. Lambda prioritizes being able to learn quickly while tackling problems that you have never faced before. I came into this program with a strong foundation in Javascript and left knowing that I could pick up other technologies with relative ease.
          </p>
          <p>
            My most recent project was working in a team of five developers to create a deployed web application called Closet Roulette, a virtual closet management tool and outfit randomizer. Managing DevOps while contributing to the front and back ends of this project was my personal responsibility and a fantastic learning experience.
          </p>
          <p>
            Moving forward, I would like to contribute to open source projects as much as possible. I would like to find a company in which I can be a part of an experienced team or able to work under a skilled mentor. Doing anything that will allow me to learn from experienced developers or hone my expertise is exactly what I’m looking for.
          </p>
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default About;