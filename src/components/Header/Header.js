import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="App-header">Movies!</h1>
        <nav>
          <h3>
            <Link to="/">Home Page</Link>
          </h3>
          <h3>
            <Link to="/add">Add New Movie</Link>
          </h3>
        </nav>
      </div>
    );
  }
}
export default Header;
