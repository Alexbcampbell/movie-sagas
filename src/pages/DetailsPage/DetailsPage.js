import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  onBackToList = (event) => {
    this.props.history.push('/');
  };

  render() {
    const genreArray = this.props.reduxState.genres.map((item, index) => {
      return (
        <div>
          <div key={item.id}></div>
          <div>{item.name}</div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <div {...genreArray}></div>
          <button onClick={this.onBackToList}>Back to List</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(DetailsPage);
