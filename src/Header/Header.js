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
		this.props.overlay.current.style.visibility = 'visible';
		this.props.overlay.current.style.background = '#383838';

		setTimeout(() => {
			this.header.current.style.marginTop = '-100px';
		}, 400);

		setTimeout(() => {
			this.props.history.push(`/${path}`);
		}, 1000);
  };
  
  hideHeader = () => {
    
  }

	toggleNav = () => {
    this.header.current.style.marginTop = '-100px';
    
    setTimeout(() => {
      this.props.history.push('/');
    }, 500);
    
		// this.setState({ collapsed: !this.state.collapsed });
		// const delay = 400;
		// const navStyle = this.navItems.current.style;
		// const hamClass = this.hamburger.current.classList;

		
		// if (this.state.collapsed) {
		// 	navStyle.visibility = 'visible';
		// 	navStyle.top = '65px';
		// 	hamClass.toggle('change');

		// 	setTimeout(() => {
		// 		hamClass.toggle('cross');
		// 	}, delay);
		// } else {
		// 	navStyle.visibility = 'hidden';
		// 	navStyle.top = '-140px';
		// 	hamClass.toggle('cross');

		// 	setTimeout(() => {
		// 		hamClass.toggle('change');
		// 	}, delay);
		// }
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
				{/* <div className="nav-items" ref={this.navItems}>
					{this.props.navItems.map((item) => (
            <div key={item}>
              <div onClick={() => this.goTo(item === 'Home' ? '' : item.toLowerCase())}>
                <h2 className="header-nav-item">{item}</h2>
              </div>
              { item !== this.props.navItems[this.props.navItems.length - 1] ?
                <div className="nav-items-divide"></div> : null }
            </div>
					))}
				</div> */}
			</div>
		);
	}
}

export default Header;
