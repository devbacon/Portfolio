import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing/Landing.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Projects from './Projects/Projects.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
      </Switch>
    );
  }
}

export default App;
