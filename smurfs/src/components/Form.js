import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 30px auto;
  text-align: left;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid blue;
  outline: none;
  background: none;
  margin: 15px auto;
  width: 400px;
  display: block;
`;

const Button = styled.button`
  background: none;
  border: 2px solid blue;
  color: blue;
  outline: none;
  position: relative;
  box-shadow: 0 4px blue;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 38px;

  &:hover {
    top: 2px;
    box-shadow: 0 2px blue;
  }

  &:active {
    top: 4px;
    box-shadow: none;
    text-align: left;
    display: inline-block;
  }
`;

class Form extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let smurf = this.state;
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurf(smurf);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
    return null;
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Input
          name="name"
          onChange={this.onChangeHandler}
          value={this.state.name}
          type="text"
          placeholder="Smurf Name..."
        />
        <Input
          name="age"
          onChange={this.onChangeHandler}
          value={this.state.age}
          type="number"
          min="1"
          placeholder="Smurf Age..."
        />
        <Input
          name="height"
          onChange={this.onChangeHandler}
          value={this.state.height}
          type="number"
          min="1"
          placeholder="Smurf Height..."
        />
        <Button>Submit</Button>
      </StyledForm>
    );
  }
}

const mapStateTpProps = ({ smurfs, fetchingSmurfs, error }) => ({
  smurfs,
  fetchingSmurfs,
  error
});

export default connect(
  mapStateTpProps,
  { addSmurf }
)(Form);
