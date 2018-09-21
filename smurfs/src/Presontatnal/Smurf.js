import React, { Fragment } from 'react';

function Smurf(props) {
  return (
    <Fragment>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </Fragment>
  )
}

export default Smurf;