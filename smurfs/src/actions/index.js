/* ACTIONS
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const DELETING = 'DELETING';
export const UPDATING = 'UPDATING';

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

//getsmurfs from server
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

//addFriend from server
export const addSmurf = newSmurf => dispatch => {
  console.log(newSmurf);
  dispatch({ type: FETCHING });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMesage: 'Error fetching the data' });
    });
};
//deleteFriend from server
export const deleteSmurf = index => dispatch => {
  dispatch({ type: FETCHING });
  console.log(index);

  axios
    .delete(`http://localhost:3333/smurfs/${index}`)
    .then(response => {
      dispatch({ type: DELETING });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMesage: 'Error fetching the data' });
    });

  window.location.reload();
};

//updateSmurfs from server
export const updateSmurf = smurf => dispatch => {
  dispatch({ type: FETCHING });
  console.log(smurf);

  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      console.log(response);
      dispatch({ type: UPDATING });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMesage: 'Error fetching the data' });
    });

  window.location.reload();
};
