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
    //on click of movie poster, user is brought to details page for specific movie
    this.props.history.push('/details/');
  };

  render() {
    //list all movies on home page
    const moviesArray = this.props.reduxState.movies.map((item, index) => {
      return <MovieItem key={index} movies={item} />;
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
