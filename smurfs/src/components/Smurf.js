import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteSmurf } from '../actions';

const Smurf = props => {
  const handleClick = () => {
    props.deleteSmurf(props.smurf);
  };

  const { id, name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <div className="delete-smurf" onClick={handleClick}>
        X
      </div>
      <Link to={`/update/${id}`}>
        <h1>{name}</h1>
      </Link>
      <h2>{age}</h2>
      <h2>{height}</h2>
    </div>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.object.isRequired,
  deleteSmurf: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
