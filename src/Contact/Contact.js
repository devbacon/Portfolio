import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Contact.css';

class Contact extends Component {
  constructor() {
    super();

    this.overlay = React.createRef();
  }

  render() {
    return (
      <div className="page-container">
        <Header 
          title="Contact"
          navItems={['Home', 'About', 'Projects']}
          overlay={this.overlay}
          history={this.props.history}
        />
        <div className="page-body">
          <h1>TESTING!!!</h1>
        </div>
        <div className="page-overlay" ref={this.overlay}></div>
      </div>
    );
  }
}

export default Contact;