import React, { Component } from 'react';
import './App.css';
//import AddSmurf from './Addsmurf';
import fetchSmurfs from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import Form from './Form';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />
        })}
  </div>
)
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
