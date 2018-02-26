import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log('App Props: ', this.props)
    return (
      <div className="App">
        <div className="header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          {this.props.fetchingSmurfs ? (
            <p className="fetching"> calling your smurfs ... </p>
          ) : null}
        </div>
        <SmurfForm smurfs={this.props.smurfs}/>
        <Smurfs smurfs={this.props.smurfs} className="smurfs"/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurfs: state.addingSmurfs,
    addSmurf: state.addSmurf,
    error: state.error
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
