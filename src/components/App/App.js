import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMoviePage from '../../pages/AddMoviesPage/AddMoviePage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import HomePage from '../../pages/HomePage/HomePage';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/add" component={AddMoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;
