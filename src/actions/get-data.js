import axios from 'axios';

import projectsUpdate from './projects-update';
import eventsUpdate from './events-update';

const getData = () => {
  return dispatch => {
    axios
      .get('/umma-server/getData')
      .then(res => {
        console.log('=xxxxxxxxx=>', res.data.projects);
        dispatch(projectsUpdate(res.data.projects));
        return res.data.projects;
      })
      .then(res => {
        dispatch(eventsUpdate(res.data.events));
        return res.data.events;
      })
      .catch(err => console.error(err));
  };
};

export default getData;
