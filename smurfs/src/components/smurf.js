import React from 'react';
import { Link } from 'react-router-dom'

const Smurf = props =>{
    return (
        <div>
        <Link to><h1>{props.smurf.name}</h1></Link>
        </div>
    )
}
export default Smurf;