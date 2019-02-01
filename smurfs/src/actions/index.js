import axios from 'axios'; 

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
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

const URL = 'http://localhost:3333'

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/smurfs`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ 
          type: GET_SMURFS, 
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ 
          type: ERROR, 
          payload: error
        });
      });
  }
}

export const createSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/smurfs`, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF});
    newSmurf
    .then(({data}) => {
      dispatch({ type: CREATE_SMURF, payload: data })
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error })
    });
  };
};

export const updateSingleSmurf = smurf => {
  return {
    type: SINGLE_SMURF,
    payload: smurf
  };
};

export const updateSmurf = (id, body) => {
  const updatedSmurf = axios.put(`${URL}/smurfs/${id}`, body);
  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    updatedSmurf
      .then(({ data }) => {
        dispatch({ type: UPDATE_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_SMURF
  };
};