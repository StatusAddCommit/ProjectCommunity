import axios from 'axios';

import projectsUpdate from './projects-update';
import eventsUpdate from './events-update';

// export const GET_DATA_BEGIN = 'GET_DATA_BEGIN';
// export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
// export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

// export const getDataBegin = () => ({
//   type: GET_DATA_BEGIN
// });

// export const getDataSuccess = data => ({
//   type: GET_DATA_SUCCESS,
//   payload: { data }
// });

// export const getDataFailure = error => ({
//   type: GET_DATA_FAILURE,
//   payload: { error }
// });

// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

// export function getData() {
//   return dispatch => {
//     dispatch(getDataBegin());
//     return fetch('/umma-server/getData')
//       .then(handleErrors)
//       .then(res => {
//         dispatch(projectsUpdate(res.data.projects));
//         return res.data.projects;
//       })
//       .catch(error => dispatch(getDataFailure(error)));
//   };
// }

const getData = () => dispatch => {
  return axios
    .get('/umma-server/getData')
    .then(res => {
      dispatch(projectsUpdate(res.data.projects));
      dispatch(eventsUpdate(res.data.events));
    })
    .catch(err => console.error(err));
};

export default getData;
