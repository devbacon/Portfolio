import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.header = React.createRef();
		this.nav = React.createRef();
		this.navItems = React.createRef();
		this.hamburger = React.createRef();

		this.state = {
			collapsed: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.header.current.style.marginTop = 0;
		}, 100);

		setTimeout(() => {
			if (this.props.overlay.current) {
				this.props.overlay.current.style.background = 'none';
			}
		}, 500);

		setTimeout(() => {
			if (this.props.overlay.current) {
				this.props.overlay.current.style.visibility = 'hidden';
			}
		}, 1200);
	}

	goTo = (path) => {
		this.toggleNav();
		this.props.overlay.current.style.background = '#383838';
		this.props.overlay.current.style.visibility = 'visible';

		setTimeout(() => {
      this.header.current.style.marginTop = '-100px';
		}, 400);

		setTimeout(() => {
			this.props.history.push(`/${path}`);
		}, 1000);
	};

	hideHeader = () => {};

	toggleNav = () => {
    this.header.current.style.marginTop = '-100px';

		setTimeout(() => {
			this.props.history.push('/');
		}, 500);
	};

	render() {
		return (
			<div>
				<div className="header-container" ref={this.header}>
					<h1 className="header-title">{this.props.title}</h1>
					<div className="header-nav">
						<div className="hamburger" onClick={this.toggleNav} ref={this.hamburger}>
							<div className="bar1" />
							<div className="bar2" />
							<div className="bar3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
