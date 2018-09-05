import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';


const Smurfs = (props) => {
  console.log("props on Smurfs", props)
  return(
    <div className="row">
      {props.smurfs.map(smurf => {
        return(
          <div key={smurf.id} className="col-4 border border-success">
            <ul>
              <li>Name: {smurf.name}</li>
              <li>Age: {smurf.age}</li>
              <li>Height: {smurf.height}</li>
            </ul>
            <button onClick={() => props.deleteSmurf(smurf)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
 
export default connect(mapStateToProps, { deleteSmurf })(Smurfs);