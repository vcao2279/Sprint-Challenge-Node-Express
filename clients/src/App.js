import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './components/Projects';
import ProjectActions from './components/ProjectActions';
import styled from 'styled-components';

const APP = styled.div`
  background: #FAF3E6;
  text-align: center;
  width: 100vw;
  height: 100vh;
  color: #272625;
`

class App extends Component {
  render() {
    return (
      <Router>
        <APP>
          <Route exact path='/' component={Projects} />
          <Route path='/projects/:id' component={ProjectActions} />
        </APP>
      </Router>
    );
  }
}

export default App;
