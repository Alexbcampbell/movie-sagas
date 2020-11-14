import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DetailsPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
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

export default withRouter(connect(mapStateToProps)(DetailsPage));
