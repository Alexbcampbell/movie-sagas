import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class DetailsPage extends Component {
  componentDidMount() {
    //gets movie details
    console.log(this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
    //gets all genres
    this.props.dispatch({
      type: 'GET_GENRES',
      payload: this.props.match.params.id,
    });
  }

  onBackToList = (event) => {
    //back to home page
    this.props.history.push('/');
  };

  render() {
    //join tables as an object that has all details for specific movie id
    const { movieDetails } = this.props.reduxState;
    const genreName = movieDetails.genres.map((item, index) => {
      return (
        <li className="genre-markers" key={index}>
          {item.name}
        </li>
      );
    });
    return (
      <div>
        <div>
          <div>
            <h2>Movie Details</h2>
          </div>
          <div>
            <p>Title: {movieDetails.title}</p>
            <ul>Genre(s): {genreName}</ul>
            <img src={movieDetails.poster} />
            <p>Description: {movieDetails.description}</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onBackToList}
          >
            Back to List
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(DetailsPage));
