import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="page-container">
        <Header title="Contact" navItems={['Home', 'About', 'Projects']} history={this.props.history}/>
        <div className="page-body">

        </div>
      </div>
    );
  }
}

export default Contact;