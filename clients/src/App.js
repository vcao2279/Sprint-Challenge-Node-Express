import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './components/Projects';
import ProjectActions from './components/ProjectActions';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Projects} />
          <Route path='/projects/:id' component={ProjectActions} />
        </div>
      </Router>
    );
  }
}

export default App;
