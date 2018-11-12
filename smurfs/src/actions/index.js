import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURF = 'POST_SMURF';
export const PUT_SMURF = 'PUT_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: PUT_SMURF });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};
