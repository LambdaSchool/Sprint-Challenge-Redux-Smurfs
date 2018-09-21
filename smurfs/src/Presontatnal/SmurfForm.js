import React from 'react';

function SmurfForm(props) {
  return(
    <form>
      <input 
        name='name' 
        type='text'
        placeholder='Smurf name' 
        value={props.input.name}
        onChange={props.handleChange}
      /> 
      <input 
        name='age' 
        type='number'
        min='1'
        placeholder='Smurf age' 
        value={props.input.age}
        onChange={props.handleChange}
      /> 
      <input 
        name='height' 
        type='text'
        placeholder='Smurf height' 
        value={props.input.height} 
        onChange={props.handleChange}
      /> 
      <button onClick={props.handleClick}>Add Smurf</button>
    </form>
  )
}

export default SmurfForm;