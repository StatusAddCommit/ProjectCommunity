import axios from 'axios';

import projectsUpdate from './projects-update';
import eventsUpdate from './events-update';

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
