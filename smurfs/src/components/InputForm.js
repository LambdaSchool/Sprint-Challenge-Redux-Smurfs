import React from 'react';

export default function InputForm (props) {
    return(
        <div>
          <form onSubmit={props.onSubmitAddHandler}>

              <input 
              onChange={props.inputChangeHandler}
              type="number"
              value={props.id}
              placeholder="id"
              name="id"
              />

              <input 
              onChange={props.inputChangeHandler}
              type="text"
              value={props.name}
              placeholder="name"
              name="name"
              />

              <input 
              onChange={props.inputChangeHandler}
              type="text"
              value={props.age}
              placeholder="age"
              name="age"
              />

              <input 
              onChange={props.inputChangeHandler}
              type="text"
              value={props.email}
              placeholder="email"
              name="email"
              />



              <button>Add Smurf</button>
              <button onClick={props.smurfDeleter}>Delete Smurf</button>
              <button onClick={props.smurfEditer}>Edit Smurf</button>

          </form>
                
        </div>
    );
}
