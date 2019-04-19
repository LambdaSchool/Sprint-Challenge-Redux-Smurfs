import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import { connect } from 'react-redux';
import AddForm from '../components/addForm';
import Smurf from '../components/smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    addingSmurf: false
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  toggleAdding = () => {
    this.setState({addingSmurf: !this.state.addingSmurf})
  }
  render() {
    return (
      <div className="App">
        <h1>I AM GARGAMEL!</h1>
        <div>This is my list of imprisoned Smurfs.</div>
        <div>When they anger me, i feed them to my cat, Azrael</div>
        <div className="smurf-list">
        {this.props.smurfs.map(smurf => 
          <Smurf smurf={smurf} 
          deleteSmurf={this.props.deleteSmurf} 
          updateSmurf={this.props.updateSmurf} />)}
        </div>

        {this.state.addingSmurf ? 
        <div className='smurf-card'>
          <AddForm addSmurf={this.props.addSmurf} toggleAdding={this.toggleAdding}/>
        </div>
        :
        <button className='open-add-form' onClick={this.toggleAdding}>Add a Smurf</button>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}


export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurf,
    deleteSmurf,
    updateSmurf
  }
)(App);
