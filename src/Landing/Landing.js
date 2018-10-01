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
    window.addEventListener('resize', this.renderLayout);
		this.renderLayout();
    this.enterLanding();
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
		const zoneTwoLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height, 2));
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
	};

	enterLanding = () => {
		if (window.previousLocation) {
			const headerChildren = this.header.current.childNodes;
			const zoneChildren = [ ...this.zoneOne.current.childNodes, ...this.zoneTwo.current.childNodes ];

			headerChildren.forEach((child) => {
				child.style.transition = '0s';
				child.classList.add('header_hidden');
			});

			zoneChildren.forEach((child) => {
				child.style.transition = '0s';
				child.classList.add('zone_hidden');
			});

			switch (window.previousLocation.pathname) {
        case '/about':
					this.zoneOneStyle.transform = `translate(-50%, ${window.innerHeight + 10}px) rotate(0deg)`;
					this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
					this.zoneTwoStyle.marginLeft = `${window.innerWidth / 2 + 10}px`;
					break;
				case '/contact':
					this.zoneOneStyle.transform = `translate(-50%, ${window.innerHeight + 10}px) rotate(0deg)`;
					this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
					this.zoneTwoStyle.marginLeft = `-${window.innerWidth / 2 + 10}px`;
					break;
				case '/projects':
					this.zoneOneStyle.transform = `translate(-50%, -10px) rotate(0deg)`;
					this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
					this.zoneTwoStyle.marginLeft = `-${window.innerWidth / 2 + 10}px`;
					break;
				default:
					break;
			}

			setTimeout(() => {
				this.zoneOneStyle.transition = '1s';
        this.zoneTwoStyle.transition = '1s';

				const width = window.innerWidth;
				const height = window.innerHeight;

				const zoneOneAngle = Math.atan2(height / 2, width) * 180 / Math.PI;
				const zoneTwoAngle = Math.atan2(height, width / 2) * 180 / Math.PI;

				this.zoneOneStyle.transform = `translate(-50%) rotate(${zoneOneAngle}deg)`;
				this.zoneTwoStyle.left = `${width / 2}px`;
				this.zoneTwoStyle.transform = `translate(-50%) rotate(-${zoneTwoAngle}deg)`;
				this.zoneTwoStyle.marginLeft = `${width / 2}px`;

				headerChildren.forEach((child) => {
					child.style.transition = '3s';
					child.classList.remove('header_hidden');
				});

				zoneChildren.forEach((child) => {
					child.style.transition = '5s';
					child.classList.remove('zone_hidden');
				});
			}, 50);


			setTimeout(() => {
				headerChildren.forEach((child) => {
					child.style.transition = '.2s';
				});
				zoneChildren.forEach((child) => {
					child.style.transition = '.3s';
				});
      }, 700);
      
      setTimeout(() => {
        this.zoneOneStyle.transition = '0s';
        this.zoneTwoStyle.transition = '0s';
      }, 800);
		}
	};

	activatePageTransition = (cb, page) => {
		this.zoneOneStyle.transition = '.7s';
		this.zoneTwoStyle.transition = '.7s';

		const headerChildren = this.header.current.childNodes;
		const zoneChildren = [ ...this.zoneOne.current.childNodes, ...this.zoneTwo.current.childNodes ];

		headerChildren.forEach((child) => {
			child.classList.add('header_hidden');
		});
		zoneChildren.forEach((child) => {
			child.classList.add('zone_hidden');
		});

		cb();

		setTimeout(() => {
			this.zoneOneStyle.transition = '0s';
			this.zoneTwoStyle.transition = '0s';
			this.props.history.push(`/${page}`);
		}, 600);
	};

	aboutTransition = () => {
		this.activatePageTransition(() => {
			this.zoneOneStyle.transform = `translate(-50%, ${window.innerHeight + 10}px) rotate(0deg)`;
			this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
			this.zoneTwoStyle.marginLeft = `${window.innerWidth / 2 + 10}px`;
		}, 'about');
	};

	contactTransition = () => {
		this.activatePageTransition(() => {
			this.zoneOneStyle.transform = `translate(-50%, ${window.innerHeight + 10}px) rotate(0deg)`;
			this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
			this.zoneTwoStyle.marginLeft = `-${window.innerWidth / 2 + 10}px`;
		}, 'contact');
	};

	projectsTransition = () => {
		this.activatePageTransition(() => {
			this.zoneOneStyle.transform = `translate(-50%, -10px) rotate(0deg)`;
			this.zoneTwoStyle.transform = `translate(-50%) rotate(-90deg)`;
			this.zoneTwoStyle.marginLeft = `-${window.innerWidth / 2 + 10}px`;
		}, 'projects');
	};

	render() {
		return (
			<div className="landing-container">
				<div className="landing-header" ref={this.header}>
					<h1 className="landing-name">DEVON BACON</h1>
					<h2 className="landing-subText">Full Stack Web Developer</h2>
				</div>
				<div className="zone zone-one" ref={this.zoneOne}>
					<h3
						className="landing-pageName landing-about"
						onClick={this.aboutTransition}
						ref={this.aboutPageName}
					>
						About
					</h3>
					<h3
						className="landing-pageName landing-contact"
						onClick={this.contactTransition}
						ref={this.contactPageName}
					>
						Contact
					</h3>
				</div>
				<div className="zone zone-two" ref={this.zoneTwo}>
					<h3
						className="landing-pageName landing-projects"
						onClick={this.projectsTransition}
						ref={this.projectsPageName}
					>
						Projects
					</h3>
				</div>
			</div>
		);
	}
}

export default Landing;
