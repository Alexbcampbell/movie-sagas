import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  onBackToList = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
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
