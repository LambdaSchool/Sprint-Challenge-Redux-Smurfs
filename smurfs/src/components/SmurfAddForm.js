import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', height: '' };
  }

  addSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age: parseInt(age, 10), height });
    this.setState({ name: '', age: '', height: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.addSmurf}>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="name"
          value={this.state.name}
          name="name"
        />
        <input
          type="number"
          onChange={this.handleChange}
          placeholder="age"
          value={this.state.age}
          name="age"
        />
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="height"
          value={this.state.height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
