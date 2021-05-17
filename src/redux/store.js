/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import todosReducer from './todos/todos-reducer';

// const myMiddleware = store => next => action => {
//   console.log('my middleware', action);
//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const persistor = persistStore(store);

export default { store };
