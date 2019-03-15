import React from 'react';

const SmurfForm = props => {
  return (
    <div className='SmurfForm'>
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.handleChange}
          placeholder='name'
          value={props.state.name}
          name='name'
        />
        <input
          onChange={props.handleChange}
          placeholder='age'
          value={props.state.age}
          name='age'
        />
        <input
          onChange={props.handleChange}
          placeholder='height'
          value={props.state.height}
          name='height'
        />
        <button type='submit'>Add to village</button>
      </form>
    </div>
  );
};

export default SmurfForm;