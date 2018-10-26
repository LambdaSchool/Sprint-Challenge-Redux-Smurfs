import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
// export const ADD_SMURF = "ADD_SMURF";
// export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
// export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

const server = `http://localhost:3333/smurfs`;

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(server)
    .then(response => {
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: error
      });
    });
};

// export const addFriend = friend => dispatch => {
//   dispatch({ type: ADD_FRIEND });
//   axios
//     .post(server, friend)
//     .then(response => {
//       dispatch({
//         type: ADD_FRIEND_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: ADD_FRIEND_FAILURE,
//         payload: error
//       });
//     });
// };

// export const deleteFriend = id => dispatch => {
//   dispatch({ type: DELETE_FRIEND });
//   axios
//     .delete(`${server}/${id}`)
//     .then(response => {
//       dispatch({
//         type: DELETE_FRIEND_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: DELETE_FRIEND_FAILURE,
//         payload: error
//       });
//     });
// };

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
