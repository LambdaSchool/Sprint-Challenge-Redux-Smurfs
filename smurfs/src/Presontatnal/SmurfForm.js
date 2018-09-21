import React from 'react';

function SmurfForm(props) {
  return(
    <form>
      <input name='name' placeholder='Smurf name' value={props.name} /> 
      <input name='age' placeholder='Smurf age' value={props.age} /> 
      <input name='height' placeholder='Smurf height' value={props.height} /> 
      <button>Add Smurf</button>
    </form>
  )
}

export default SmurfForm;