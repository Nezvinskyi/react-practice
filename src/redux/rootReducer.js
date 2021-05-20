import { combineReducers } from 'redux';
import counterToolkitSlice from './counterToolkitSlice/reducer';
import counterToolkit from './counterToolkit/reducer';
import counter from './counter/reducer';
import todos from './todos/reducer';

export default combineReducers({
  counterToolkitSlice,
  counterToolkit,
  counter,
  todos,
});
