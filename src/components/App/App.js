import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
