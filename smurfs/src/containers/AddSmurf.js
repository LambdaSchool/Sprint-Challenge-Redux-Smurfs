import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addSmurf } from '../actions';

class AddSmurf extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurf({
      name,
      age: parseInt(age, 10),
      height,
    });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <form className="add-smurf" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
          required
        />
        <input
          name="age"
          type="number"
          value={age}
          placeholder="Age"
          onChange={this.handleChange}
          required
        />
        <input
          name="height"
          type="text"
          value={height}
          placeholder="Height"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

AddSmurf.propTypes = {
  addSmurf: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addSmurf }
)(AddSmurf);
