/* eslint-disable import/no-anonymous-default-export */
// import { composeWithDevTools } from 'redux-devtools-extension'; //uninstall npm module
import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'hello',
  storage,
};

//before
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

//before
// const store = createStore(rootReducer, composeWithDevTools());

// devtools - not for production!
// console.log(process.env.NODE_ENV === 'development');

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
