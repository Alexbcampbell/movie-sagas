import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, TextField, Select, InputLabel } from '@material-ui/core';

class AddMoviePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
    },
  };

  handleInputChange = (input) => (event) => {
    this.setState({
      newMovie: { ...this.state.newMovie, [input]: event.target.value },
    });
  };
  //Adds new movie to database via axios in index.js, sends response via dispatch
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
    this.props.history.push('/');
  };

  onCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    const selectGenre = this.props.reduxState.genres.map((item, index) => {
      return (
        //lists all genre options in dropdown menu, data sent to junction table
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });

    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <div>
            <TextField
              id="outlined-basic"
              label="Movie Title"
              variant="outlined"
              onChange={this.handleInputChange('title')}
            />
            <TextField
              id="outlined-basic"
              label="Poster URL"
              variant="outlined"
              onChange={this.handleInputChange('poster')}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={this.handleInputChange('description')}
            />
            <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={this.state.input}
              onChange={this.handleInputChange('genre_id')}
            >
              {selectGenre}
            </Select>
          </div>
          <div>
            <Button
              onClick={this.addNewMovie}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              onClick={this.onCancel}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMoviePage);
