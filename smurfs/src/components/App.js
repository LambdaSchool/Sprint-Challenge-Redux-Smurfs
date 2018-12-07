import React, { Component } from "react";
import "./App.css";
import SmurfVillage from "./SmurfVillage";
import Form from "./Form";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <hr />
        <Form />
        <hr />
        <SmurfVillage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs, error }) => ({
  smurfs,
  fetchingSmurfs,
  error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
