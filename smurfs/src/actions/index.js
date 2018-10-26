import axios from 'axios';

import { FETCH_SMURFS, ADD_SMURF, DELETE_SMURF, EDIT_SMURF } from './types';

export const fetchSmurfs = () => async dispatch => {
  const res = await axios.get('http://localhost:3333/smurfs');
  dispatch({ type: FETCH_SMURFS, payload: res.data });
};

export const addSmurf = smurf => async dispatch => {
  const res = await axios.post('http://localhost:3333/smurfs', smurf);
  dispatch({ type: ADD_SMURF, payload: res.data });
};

export const deleteSmurf = id => async dispatch => {
  const res = await axios.delete(`http://localhost:3333/smurfs/${id}`);
  dispatch({ type: DELETE_SMURF, payload: res.data });
};

export const editSmurf = (id, smurf) => async dispatch => {
  const res = await axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
  dispatch({ type: EDIT_SMURF, payload: res.data });
};
