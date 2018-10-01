import React, { Component } from 'react';

class ProjectCard extends Component {
  constructor() {
    super();

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
          <a href={this.props.link}>
            <img 
              src={this.props.image} 
              alt="Project Thumbnail"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;