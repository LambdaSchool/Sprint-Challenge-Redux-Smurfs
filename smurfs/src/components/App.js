import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 

import { fetchSmurfs } from '../actions/index';
import Smurfs from './Smurfs'; 
import AddSmurf from './AddSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App container">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}



export default connect(null, { fetchSmurfs })(App);
