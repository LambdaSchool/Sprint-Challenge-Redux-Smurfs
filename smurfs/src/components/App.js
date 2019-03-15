import React, { Component } from 'react';
import { connect } from 'react-redux';

import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm';
import './App.css';

import { getSmurf } from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default connect(() => ({}), { getSmurf })(App);
