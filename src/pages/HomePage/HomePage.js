import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/movieItem';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handlePosterClick = (event) => {
    this.props.history.push('/details/');
  };

  render() {
    const moviesArray = this.props.reduxState.movies.map((movie) => {
      return <MovieItem key={movie.id} movie={movie} />;
    });
    return (
      <div>
        <ul>{moviesArray}</ul>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(HomePage);
