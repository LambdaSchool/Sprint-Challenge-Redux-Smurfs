import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf) => {
            return (
              <div>
              <Smurf
                {...this.props}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                id={smurf.id}/>
          </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
