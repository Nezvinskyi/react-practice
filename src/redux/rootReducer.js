import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterToolkitSlice from './counterToolkitSlice/reducer';
import counterToolkit from './counterToolkit/reducer';
import counter from './counter/reducer';
import todos from './todos/reducer';

const persistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(persistConfig, todos);

export default combineReducers({
  counterToolkitSlice,
  counterToolkit,
  counter,
  todos: todosReducer,
});
