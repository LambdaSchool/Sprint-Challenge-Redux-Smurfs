import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        height: ''
    };
}
    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
      return (
        <div className="smurf-form">
            <input 
            onChange={this.handleInputChange} 
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
            />
            <input 
            onChange={this.handleInputChange} 
            value={this.state.age}
            name="age"
            type="text"
            placeholder="Age"
            />
            <input 
            onChange={this.handleInputChange} 
            value={this.state.height}
            name="height"
            type="text"
            placeholder="Height"
            />
            <button onClick={this.handleAddSmurf}>Add Smurf</button>
        </div>
    )
};
};

const mapStateToProps = state => {
    return {
      error: state.error,
      addingSmurf: state.addSmurf
    };
  };

export default connect(mapStateToProps, { addSmurf })(SmurfForm);