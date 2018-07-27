import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Projects} />
          {/* <Route path='/users/:id' component={UserPosts} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
