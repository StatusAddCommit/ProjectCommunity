import { combineReducers } from 'redux';
import templateReducer from './templateReducer';

const allReducers = combineReducers({
  template: templateReducer,
  replaceMe: () => 'replace me'
});

export default allReducers;
