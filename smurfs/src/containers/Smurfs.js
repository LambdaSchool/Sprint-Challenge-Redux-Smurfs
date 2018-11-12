import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSmurfs } from '../actions';
import Smurf from '../components/Smurf';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="smurfs">
        {smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
});

Smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
  getSmurfs: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
