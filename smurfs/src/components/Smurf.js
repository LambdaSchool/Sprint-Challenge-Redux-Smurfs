import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = (props) => {
    console.log(props.smurf.id)
    return(
        <div>
            <Link to = {`/smurfs/${props.smurf.id}`}>
                <h1>{props.smurf.name}</h1>
            </Link>
        </div>
    )
}

export default Smurf;