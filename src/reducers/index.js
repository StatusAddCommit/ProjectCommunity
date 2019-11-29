import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import eventsReducer from './events-reducer';

const allReducers = combineReducers({
  projects: projectsReducer,
  events: eventsReducer
});

export default allReducers;
