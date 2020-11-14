import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AddMoviePage from '../../pages/AddMoviesPage/AddMoviePage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
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
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/add" component={AddMoviePage} />
        </Router>
      </div>
    );
  }
}

export default App;
