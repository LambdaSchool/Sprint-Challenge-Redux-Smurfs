import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import Smurf from "./Smurf";
import styled from "styled-components";

const Village = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
`;

class SmurfVillage extends Component {
  render() {
    if (!this.props.smurfs || this.props.fetchingSmurfs) {
      return <h3>Loading Smurf Village...</h3>;
    }
    return (
      <Village>
        {this.props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id ? smurf.id : Date.now()}
            id={smurf.id ? smurf.id : Date.now()}
            {...this.props}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
      </Village>
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
  { getSmurfs, deleteSmurf }
)(SmurfVillage);
