/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCHING_SMURF = FETCHING_SMURF;
export const ADDING_SMURF = ADDING_SMURF
export const UPDAING_SMURF = UPDAING_SMURF;
export const DELETING_SMURF = DELETING_SMURF;
export const ERROR = ERROR;

export const fetchSmurf = () => {
  const promise = axios.get('http://localhost:3333');

  return function(dispatch) {
    dispatch({type: FETCHING_SMURF});
    promise.then((response) => {
      console.log(response);
      dispatch({type: ADDING_SMURF, payload: response.data.results})
    })
    .catch(err => {
      dispatch({ype: ERROR, msg: "Error fetching smurf"})
    })
  }
}
