import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


export default props => {
  return (
    <div>
      <p>Smurf Name: {props.smurf.name}</p>
      <p>Smurf Age: {props.smurf.age}</p>
      <p>Smurf Height: {props.smurf.height}</p>
    </div>
  )
}


// class deleteSmurfs extends Component {
//   componentDidMount() {
//     this.props.getSmurfs();
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.smurfs.map((smurfs, i) => {
//             return (
//               <li key={smurfs.i}>
//                 <p>{smurfs.name}</p>
//                 <p>{smurfs.height} Tall</p>
//                 <p>{smurfs.age} Smurf Years Old</p>
//               </li>
//             );
//           })}
//         </ul>
//         <button onClick={() => deleteSmurfs()}>Banish This Smurfity Smurf!</button>
//         </div>
//     );
//   }
// }


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  };    
};

export default connect(mapStateToProps, { getSmurfs })(deleteSmurfs);