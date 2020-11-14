import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  render() {
    const moviesArray = this.props.reduxState.movies.map((item, index) => {
      return (
        <div>
          <div key={item.id}></div>
          <div>{item.title}</div>
          <div>
            <img src={item.poster} />
          </div>
          <div>{item.description}</div>
        </div>
      );
    });
    console.log(moviesArray);
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
