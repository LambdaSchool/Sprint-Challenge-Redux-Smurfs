import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editSmurf } from '../actions';

class SmurfEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', age: '', height: '' };
  }

  editSmurf = e => {
    e.preventDefault();
    const { id, name, age, height } = this.state;
    this.props.editSmurf(id, { name, age: parseInt(age, 10), height });
    this.setState({ id: '', name: '', age: '', height: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.editSmurf}>
        <input
          type="number"
          onChange={this.handleChange}
          placeholder="id"
          value={this.state.id}
          name="id"
        />
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
        <button type="submit">Edit Smurf</button>
      </form>
    );
  }
}

export default connect(
  null,
  { editSmurf }
)(SmurfEditForm);
