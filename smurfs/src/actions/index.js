import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR'
export const ADDING_SMURF = 'ADDING_SMURF'
const URL = `http://localhost:3333/smurfs`;

export const fetchSmurfs = () => {

  return dispatch => {
    dispatch({
      type: FETCHING
    })
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Error getting smurfs'})
      })
  }
};

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({
      type: ADDING_SMURF
    });
    axios
     .post(URL, smurf)
     .then(response => {
       dispatch({ type: FETCHED, payload: response.data})
     })
     .catch(error => {
       dispatch({type: ERROR, payload: 'Error adding smurf'})
     })
  }
};

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
export default fetchSmurfs;
