import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ProjectCard from './ProjectCard.js';
import './Projects.css';

import ClosetRouletteImage from '../media/images/closet-roulette.png';
import PortfolioImage from '../media/images/portfolio.png';

const closetRouletteData = {
	title: 'Closet Roulette',
	image: ClosetRouletteImage,
	summary: (
		<div>
			<p>
				Closet Roulette is a virtual wardrobe used to upload images of clothing, transforming them into digital
				attire. After you have uploaded the clothing that you want, you can then have an outfit recommended to
				you based on selected categories. Each of these categories represents a type of clothing such as shirts,
				bottoms, or shoes.
			</p>
			<p>
				You can save outfits based on the recommendation or even fine-tune the items manually. All outfits can
				be stored in the outfit archive to be viewed at any time. This app also offers features such as date
				selection so that you can see when you have worn an outfit and when you plan to wear it again.
			</p>
		</div>
	),
	experience: (
		<div>
			<p>
				A team of four developers and myself created this project in four short weeks. We were given nothing but
				a minimum viable product and a rough mock-up. Beyond that, we had to discuss what approach, best
				practices, and tech stacks would be best suited for the task. It took some time for us to get our
				bearings but eventually, we found our flow.
			</p>
			<p>
				After four weeks of learning on the fly and project iterations, both in design and functionality, we
				were able to create Closet Roulette. This experience taught me so much about team dynamics and
				cooperation that I will never forget.
			</p>
		</div>
	),
	technology: (
		<div>
			<p>
				- <span className="tech-name">Javacript</span> : Base language used across entire app <br />
				- <span className="tech-name">React</span> : Library used for component creation<br />
				- <span className="tech-name">React Router</span> : React routing library<br />
				- <span className="tech-name">HTML</span> : Component layout<br />
				- <span className="tech-name">CSS</span> : Component styling<br />
				- <span className="tech-name">Reactstrap</span> : React version of component library<br />
				- <span className="tech-name">Node</span> : Back end environment<br />
				- <span className="tech-name">Express</span> : Node framework<br />
				- <span className="tech-name">Passport</span> : User authentication and OAuth<br />
				- <span className="tech-name">Bcrypt</span> : User data encryption<br />
				- <span className="tech-name">JWT</span> : Transfer data and manage user session<br />
				- <span className="tech-name">MongoDB</span> : Document database<br />
				- <span className="tech-name">Mongoose</span> : MongoDB extension<br />
				- <span className="tech-name">Axios</span> : Request JSON info from database<br />
				- <span className="tech-name">Cloudinary</span> : Image storage<br />
				- <span className="tech-name">Stripe</span> : Payment Integration<br />
				- <span className="tech-name">Sendgrid</span> : Email verification and notice<br />
				- <span className="tech-name">Heroku</span> : Deployment platform<br />
			</p>
		</div>
	),
	link: 'https://www.closetroulette.com/',
	github: 'https://github.com/Lambda-School-Labs/CS9-OutfitCreator'
};

const portfolioData = {
	title: 'Professional Portfolio',
	image: PortfolioImage,
	summary: (
		<div>
			<p>
				I’m sure that this is fairly self-explanatory but this is my professional portfolio. As with most
				portfolios, it has some information in regards to myself, my projects and my contact info. What makes
				this one slightly different is that it is all custom made, including animation. One of the things I like
				most is coming up with unique or custom animations such as the landing page.
			</p>
			<p>
				Please be sure to let me know if there are any improvements that I could make. Even the smallest
				critique is helpful. Also, make sure to stay tuned. There may be a few easter eggs put in very soon.
			</p>
		</div>
	),
	experience: (
		<div>
			<p>
				As stated in the summary, I enjoy making custom animations very much, especially when I can mix in some
				nifty functionality. Although it did take a bit longer than using a library like Bootstrap or
				MaterialsUI, this little project was a blast. Its base version was completed in one week, most of which
				was only part-time.
			</p>
			<p>
				I used Adobe XD CC for a quick mockup and got to work. React made the primary layout easy as always. The
				most fun was probably the geometric algorithms to calculate the landing page line elements and fix them
				to the outer edges of the screen no matter what size it is.
			</p>
		</div>
	),
	technology: (
		<div>
			<p>
				- <span className="tech-name">Javascript</span> : Base language used across entire app <br />
				- <span className="tech-name">React</span> : Library used for component creation<br />
				- <span className="tech-name">React Router</span> : React routing library<br />
				- <span className="tech-name">HTML</span> : Component layout<br />
				- <span className="tech-name">CSS</span> : Component styling<br />
				- <span className="tech-name">Firebase</span> : Deployment platform<br />
			</p>
		</div>
	),
	link: 'https://devbacon.com/',
	github: 'https://github.com/metalogicoder/Portfolio'
};

class Projects extends Component {
	constructor(props) {
		super(props);

		this.overlay = React.createRef();
		window.previousLocation = props.location;
	}

	render() {
		return (
			<div className="page-container">
				<Header
					title="Projects"
					navItems={[ 'Home', 'About', 'Contact' ]}
					overlay={this.overlay}
					history={this.props.history}
				/>
				<div className="page-body project-body">
					<ProjectCard project={closetRouletteData} />
					<ProjectCard project={portfolioData} />
				</div>
				<div className="page-overlay" ref={this.overlay} />
			</div>
		);
	}
}

export default Projects;
