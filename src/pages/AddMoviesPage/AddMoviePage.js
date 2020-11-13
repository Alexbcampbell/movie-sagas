import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMoviePage extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Movie Title" name="title"></input>
          <input type="text" placeholder="Poster URL" name="image"></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
          ></input>
          <input type="text" placeholder="Genre" name="genre"></input>
        </div>
        <div>
          <button>Add New Movie!</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMoviePage);
