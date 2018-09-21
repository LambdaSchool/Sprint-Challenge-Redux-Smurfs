import React from "react";

function SmurfForm(props) {
  console.log(props.input.editId)
  return (
    <form>
      <h2>{props.input.editId? "Edit Smurf" : "Add Smurf" }</h2>
      <div>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Smurf name"
          value={props.input.name}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          name="age"
          type="number"
          min="1"
          placeholder="Smurf age"
          value={props.input.age}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label>Height</label>
        <input
          name="height"
          type="text"
          placeholder="Smurf height"
          value={props.input.height}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.handleClick}>{props.input.editId? "Edit Smurf" : "Add Smurf" }</button>
    </form>
  );
}

export default SmurfForm;
