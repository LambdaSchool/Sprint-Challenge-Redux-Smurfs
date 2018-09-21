import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { smurfGet, addSmurf } from '../actions';
import Smurf from '../Presontatnal/Smurf';
import SmurfForm from '../Presontatnal/SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: 0,
    height: ''
  }

  componentDidMount() {
    this.props.smurfGet();
  }

  handleChange = e => {
    if(e.target.name === 'age') {
      const number = parseInt(e.target.value, 10);
      this.setState({ [e.target.name]: number });
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  }


  render() {
    return (
      <div className="App">
        <h1>Smurfs Village</h1>
        <div>
          {this.props.smurfs.map(smurf => (
            <div key={smurf.id}>
              <Smurf smurf={smurf} />
            </div>
          ))}
        </div>
        <SmurfForm 
          input = {this.state}
          handleChange = {this.handleChange}
          handleClick = {this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { smurfGet, addSmurf })(App);
