import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  clickDetails = (event) => {
    this.props.dispatch({
      type: 'GET_MOVIES',
      payload: this.props.movies.id,
    });
  };

  render() {
    return (
      <div>
        <div key={movies.id}></div>
        <div>{movies.title}</div>
        <div>
          <img src={movies.poster} onClick={this.handlePosterClick} />
        </div>
        <div>{movies.description}</div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(MovieItem);
