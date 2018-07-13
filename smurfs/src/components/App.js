import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import AddSmurf from './addSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
    <div className = "App" >
      <header className = "App-header" >
      <h1 className = "App-title" > Welcome Smurf Village 2.0 Redux Version < /h1>
      </header>
      {this.state.showForm ? ( <AddSmurf / >
        ) : (
          <button className = "show" onClick = {() => {this.setState({showForm: true})}} >
          Add a new Smurf
          </button>
        )
      }
      {this.props.smurfs.map(smurf => {
          return <div key = {smurf.id} > {smurf.name} < /div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    fetched: state.fetched
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
