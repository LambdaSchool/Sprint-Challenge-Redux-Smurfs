import React from "react";

const Smurf = props => {
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button>murder this smurf</button>
    </div>
  );
};
export default Smurf;
