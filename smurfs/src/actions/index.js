import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURF_FETCHED = 'SMURF_FETCHED'
export const SAVING_SMURF = 'SAVING_SMURF'
export const SMUFT_SAVED = 'SMUFT_SAVED'
export const DELETING_SMURF = 'DELETING_SMURF'
export const SMURF_DELETED = 'SMURF_DELETED'
export const ERROR = 'ERROR'

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
      .then(data => {
        dispatch({ type: SMURF_FETCHED, payload: data.data })
        console.log("fetchSmurfs fired", data.data)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
        console.log("error on fetch", err)
      })
  }
}

export const newSmurf = (smurf) => {
  const postSmurf = axios.post('http://localhost:3333/smurfs', smurf)
  return function(dispatch) {
    dispatch({ type: SAVING_SMURF });
    postSmurf
      .then(data => {
        dispatch({ type: SMUFT_SAVED, payload: data.data })
        console.log("newSmurfs fired", data.data)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
        console.log("error on post", err)
      })
  }
}

export const deleteSmurf = smurf => {
  const deleteSmurf = axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
  return function(dispatch) {
    deleteSmurf
      .then(data => {
        dispatch({ type: SMURF_FETCHED , payload: data.data })

      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err})
        
      })
  }
}

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
