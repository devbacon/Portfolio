import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Contact.css';

import LinkedInIcon from '../media/images/linkedin-icon.png';
import GitHubIcon from '../media/images/github-icon.png';
import GmailIcon from '../media/images/gmail-icon.png';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.overlay = React.createRef();
		window.previousLocation = props.location;
	}

	render() {
		return (
			<div className="page-container">
				<Header
					title="Contact"
					navItems={[ 'Home', 'About', 'Projects' ]}
					overlay={this.overlay}
					history={this.props.history}
				/>
				<div className="page-body contact-body">
					<p>
						If you would like to contact me, please send me an email at devon.bacon@gmail.com or message me
						via LinkedIn. And of course, you can always check out my activity and latest projects on GitHub.
					</p>
					<p>
						Feel free to get in touch for any reason, whether it be feedback on my portfolio site, a
						potential collaboration or even just to talk about programming in general. I would love to hear
						from you.
					</p>
					<div className="contact-icons-container">
						<div className="contact-icon linkedin">
							<a
								href="https://www.linkedin.com/in/devon-bacon-692647107"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={LinkedInIcon} alt="linkedin icon" />
							</a>
						</div>
						<div className="contact-icon github">
							<a href="https://github.com/devbacon" target="_blank" rel="noopener noreferrer">
								<img src={GitHubIcon} alt="github icon" />
							</a>
						</div>
						<div className="contact-icon gmail">
							<a href="mailto:devon.bacon@gmail.com">
								<img src={GmailIcon} alt="gmail icon" />
							</a>
						</div>
					</div>
				</div>
				<div className="page-overlay" ref={this.overlay} />
			</div>
		);
	}
}

export default Contact;
