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
              className="technology-tab" 
              onClick={() => this.selectTab('technology')}
              ref={this.tabs.technology}
            >
              Technology
            </p>
            <p 
              className="experience-tab" 
              onClick={() => this.selectTab('experience')}
              ref={this.tabs.experience}
            >
              Experience
            </p>
          </div>
          <div className="details-display">{this.props[this.state.tab]}</div>
        </div>
        <div className="card-image">
          <img 
            src={this.props.image} 
            alt="Project Sample Image"
          />
        </div>
      </div>
    );
  }
}

export default ProjectCard;