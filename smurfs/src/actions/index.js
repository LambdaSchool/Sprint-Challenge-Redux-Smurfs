/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
import axios from "axios";

export const SMURF_FETCHING = "SMURF_FETCHING";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_ERROR = "SMURF_ERROR";

export const smurfGet = () => {
  return dispatch => {
    dispatch({ type: SMURF_FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => dispatch({ type: SMURF_SUCCESS, data: response.data }))
      .catch(err => dispatch({ type: SMURF_ERROR }));
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: SMURF_FETCHING });
    setTimeout(() => {
      axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => dispatch({ type: SMURF_SUCCESS, data: response.data }))
      .catch(err => dispatch({ type: SMURF_ERROR }));
    }, 500)
  }
};

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: SMURF_FETCHING });
    setTimeout(() => {
      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => dispatch({ type: SMURF_SUCCESS, data: response.data }))
      .catch(err => dispatch({ type: SMURF_ERROR }));
    }, 500)
  };
};

export const updateSmurf = smurf => {
  return dispatch => {
    dispatch({ type: SMURF_FETCHING });
    setTimeout(() => {
      axios
      .put(`http://localhost:3333/smurfs/${smurf.editId}`, smurf)
      .then(response => dispatch({ type: SMURF_SUCCESS, data: response.data }))
      .catch(err => dispatch({ type: SMURF_ERROR }));
    }, 500)
  }
};
