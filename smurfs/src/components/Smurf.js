import React, { Component } from "react";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age:  '',
      height: ''
    }
  }
  render() {
    return (
    <div>
      <h1>{this.props.smurf.name} Smurf</h1>
      <p>Age: {this.props.smurf.age} smurf years</p>
      <p>Height: {this.props.smurf.height} tall</p>
    </div>
  )}
}

export default Smurf;
