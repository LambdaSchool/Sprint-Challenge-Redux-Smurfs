import axios from  'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';
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
export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    promise.then(response => {
      console.log(response);
      dispatch({ type: SMURFS_FETCHED, payload: response.smurfs.data })
    })
    .catch(err => {
      dispatch({ type: SMURF_ERROR, payload: 'Error fetching smurfs' });
    });
  };
};