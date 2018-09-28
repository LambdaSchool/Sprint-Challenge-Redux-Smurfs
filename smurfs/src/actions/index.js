import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const SAVING_SMURF = 'SAVING_SMURF';
export const SAVED_SMURF = 'SAVED_SMURF';
export const ERROR = 'ERROR';
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
export const getSmurfs= () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: SAVING_SMURF })
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ type: SAVED_SMURF, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};