import React from "react";

// class Smurf extends
const Smurf = props => {
  return (
    <div className="Smurf">
      <div>{props.id}</div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};


export default Smurf;