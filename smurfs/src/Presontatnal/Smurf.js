import React from "react";

function Smurf(props) {
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height} cm</p>
      <button onClick={(event) => props.deleteClick(event, props.smurf.id)}>X</button>
    </div>
  );
}

export default Smurf;
