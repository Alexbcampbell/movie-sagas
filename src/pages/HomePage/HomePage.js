import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIE',
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.reduxState.movies.map((movie) => {
            return (
              <li>
                key={movie.id} movie={movie}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(HomePage);
