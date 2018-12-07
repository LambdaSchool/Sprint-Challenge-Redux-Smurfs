import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS",
  FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS",
  FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE",
  ADD_SMURF = "ADD_SMURF",
  ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS",
  ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE",
  DELETE_SMURF = "DELETE_SMURF",
  DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS",
  DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE",
  EDIT_SMURF = "EDIT_SMURF",
  EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS",
  EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE",
  GET_SINGLE_SMURF = "GET_SINGLE_SMURF",
  GET_SINGLE_SMURF_SUCCESS = "GET_SINGLE_SMURF_SUCCESS",
  GET_SINGLE_SMURF_FAILURE = "GET_SINGLE_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs/";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(({ data }) =>
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err }));
};

export const getSingleSmurf = smurf => dispatch => {
  dispatch({ type: GET_SINGLE_SMURF });
  axios
    .get(`${URL}${smurf}`, smurf)
    .then(({ data }) =>
      dispatch({ type: GET_SINGLE_SMURF_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: GET_SINGLE_SMURF_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(URL, smurf)
    .then(({ data }) => dispatch({ type: ADD_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`${URL}${smurf}`, smurf)
    .then(({ data }) => dispatch({ type: DELETE_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF });
  axios
    .put(`${URL}${smurf.id}`, smurf)
    .then(({ data }) => dispatch({ type: EDIT_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: EDIT_SMURF_FAILURE, payload: err }));
};
