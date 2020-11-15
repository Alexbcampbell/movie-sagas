import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
    },
  };

  handleInputChange = (input) => (event) => {
    this.setState({
      ...this.state.newMovie,
      [input]: event.target.value,
    });
  };

  addNewMovie = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'POST_MOVIE',
      payload: this.state.newMovie,
    });
    this.setState({
      newMovie: {
        title: '',
        poster: '',
        description: '',
      },
    });
  };

  onCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Movie Title"
            name="title"
            onChange={this.handleInputChange('title')}
          ></input>
          <input
            type="text"
            placeholder="Poster URL"
            name="image"
            onChange={this.handleInputChange('poster')}
          ></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleInputChange('description')}
          ></input>
          <input type="text" placeholder="Genre" name="genre"></input>
        </div>
        <div>
          <button>Save</button>
          <button onClick={this.onCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMoviePage);
