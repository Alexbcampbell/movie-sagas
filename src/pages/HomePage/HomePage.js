import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>HELLO</p>
      </div>
    );
  }
}
export default connect()(HomePage);
