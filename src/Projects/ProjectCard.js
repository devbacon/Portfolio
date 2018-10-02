import React, { Component } from 'react';

import ExternalLinkIcon from '../media/images/external-link-icon.png';
import GitHubIcon from '../media/images/github-icon.png';

class ProjectCard extends Component {
  constructor() {
    super();

    this.cardLinks = React.createRef();

    this.tabs = {
      summary: React.createRef(),
      technology: React.createRef(),
      experience: React.createRef()
    }

    this.state = {
      tab: 'summary'
    }
  }

  componentDidMount() {
    this.tabs[this.state.tab].current.classList.add('tab_active');
  }

  selectTab = (tabName) => {
    Object.entries(this.tabs).forEach(tab => {
      const name = tab[0];
      const element = tab[1];

      if (name === tabName) {
        element.current.classList.add('tab_active');
      } else {
        element.current.classList.remove('tab_active');
      }
    });

    this.setState({ tab: tabName });
  }

  render() {
    return (
      <div className="project-card-container">
        <div className="card-details">
          <div className="card-tabs">
            <p 
              className="summary-tab"
              onClick={() => this.selectTab('summary')}
              ref={this.tabs.summary}
            >
              Summary
            </p>
            <p 
              className="experience-tab" 
              onClick={() => this.selectTab('experience')}
              ref={this.tabs.experience}
            >
              Experience
            </p>
            <p 
              className="technology-tab" 
              onClick={() => this.selectTab('technology')}
              ref={this.tabs.technology}
            >
              Technology
            </p>
          </div>
          <div className="details-display">{this.props[this.state.tab]}</div>
        </div>
        <div className="card-image">
          <img 
            className="card-image-preview"
            src={this.props.image} 
            alt="project preview"
          />
          <div className="card-link-container">
          <a href={this.props.github} target="_blank" rel="noopener noreferrer">
            <img
              className="card-link card-link-github" 
              src={GitHubIcon} 
              alt="external link icon" 
            />
          </a>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <img
              className="card-link card-link-external" 
              src={ExternalLinkIcon} 
              alt="external link icon" 
            />
          </a>
        
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;