import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './About.css';

import AboutImage from '../media/images/about-image.png';

class About extends Component {
	constructor(props) {
		super(props);

		this.overlay = React.createRef();
		window.previousLocation = props.location;
	}

	render() {
		return (
			<div className="page-container">
				<Header
					title="About"
					navItems={[ 'Home', 'Contact', 'Projects' ]}
					overlay={this.overlay}
					history={this.props.history}
				/>
				<div className="page-body" ref={this.pageBody}>
					<div className="about-image">
						<img src={AboutImage} alt="devon bacon" />
					</div>
					<p>
						Hello, my name is Devon Bacon. I am a programmer with a passion for web development living in
						the San Francisco Bay area.
					</p>
					<p>
						Before becoming a programmer my primary professions were freeway traffic control, underground
						utility identification, and dog training. All of these occupations relied heavily on
						communication and problem-solving in very different ways.
					</p>
					<p>
						Lambda School is the computer science academy that helped me to adapt my previous skills to the
						world of software development. During my six months there, I was taught the fundamentals of
						computer science and built applications using countless technologies. The priority was being
						able to learn quickly while tackling problems that you have never faced before. I came into this
						program with a strong foundation in Javascript and left knowing that I could pick up any other
						technology with ease.
					</p>
				</div>
				<div className="page-overlay" ref={this.overlay} />
			</div>
		);
	}
}

export default About;
