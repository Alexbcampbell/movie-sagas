import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class MovieItem extends Component {
  clickDetails = (event) => {
    this.props.dispatch({
      type: 'GET_MOVIES',
      payload: this.props.movies.id,
    });
    this.props.history.push(`/details/${this.props.movies.id}`);
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <div key={this.props.movies.id}></div>
          <div>
            <strong>{this.props.movies.title}</strong>
          </div>
          <div>
            <img src={this.props.movies.poster} onClick={this.clickDetails} />
          </div>
          <div>{this.props.movies.description}</div>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));
