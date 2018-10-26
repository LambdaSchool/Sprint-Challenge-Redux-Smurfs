import React, { Component } from 'react';

class Smurfs extends Component {

    render() {
        return (
            <div>
                <h1 className="smurf-title">Smurf Village Residents:</h1>
                <div className="smurf-container">

                    {this.props.smurfs.map(smurf => {
                        return (
                            <ul key={smurf.id} className="smurf">
                                <li>Name: {smurf.name}</li>
                                <li>Age: {smurf.age} smurf years</li>
                                <li>Height: {smurf.height}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Smurfs;