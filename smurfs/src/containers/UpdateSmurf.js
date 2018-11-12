import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSmurf } from '../actions';

class UpdateSmurf extends Component {
  state = {
    id: null,
    name: '',
    age: '',
    height: '',
  };

  componentDidMount() {
    const { smurfs, match } = this.props;
    const smurf = smurfs.find(smurf => `${smurf.id}` === match.params.id);
    this.setState(smurf);
  }

  componentDidUpdate(prevProps, prevState) {
    const { smurfs, match } = this.props;
    if (
      prevState.name === '' ||
      match.params.id !== prevProps.match.params.id
    ) {
      const smurf = smurfs.find(smurf => `${smurf.id}` === match.params.id);
      this.setState(smurf);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, name, age, height } = this.state;
    this.props.updateSmurf({
      id,
      name,
      age: parseInt(age, 10),
      height,
    });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <form className="update-smurf" onSubmit={this.handleSubmit}>
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
        <button type="submit">Update Smurf</button>
      </form>
    );
  }
}

UpdateSmurf.propTypes = {
  match: PropTypes.object.isRequired,
  smurfs: PropTypes.array.isRequired,
  updateSmurf: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ smurfs: state.smurfs });

export default connect(
  mapStateToProps,
  { updateSmurf }
)(UpdateSmurf);
