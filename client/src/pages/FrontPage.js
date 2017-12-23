import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from '../components/header';
import Projects from '../components/Projects';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <a href="/auth/google">Log In</a>

          <div className="container">
            <h1 className="center">Welcome to my React Projects Page</h1>
              <Projects />

          </div>
      </div>
    );
  }
}

export default App;
