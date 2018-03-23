import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';


class SmurfetteForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
      this.addSmurf = this.addSmurf.bind(this);
      this.updateName = this.updateName.bind(this);
      this.updateAge = this.updateAge.bind(this);
      this.updateHeight = this.updateHeight.bind(this);
    }
  
    updateName(event) {
      this.setState({
        name: event.target.value
      });
    }
  
    updateAge(event) {
      this.setState({
        age: event.target.value
      });
    }
  
    updateHeight(event) {
      this.setState({
        height: event.target.value
      });
    }
  
    render() {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.updateName}
              placeholder="name"
              value={this.state.name}
            />
            <input
              onChange={this.updateAge}
              placeholder="age"
              value={this.state.age}
            />
            <input
              onChange={this.updateHeight}
              placeholder="height"
              value={this.state.height}
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {};
}
  
export default connect(mapStateToProps, { addSmurfs })(SmurfetteForm);