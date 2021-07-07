import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  handleAddSmurf = () => {
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }
  render() {
    return (
      <div className="form">
        <input name='name' value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
        <input name='age' value={this.state.age} onChange={this.handleInputChange} placeholder="Age" />
        <input name='height' value={this.state.height} onChange={this.handleInputChange} placeholder="Height" />
        <button onClick={this.handleAddSmurf}>Add Smurf</button>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(Form);
