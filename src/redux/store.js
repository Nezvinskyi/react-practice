import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './rootReducer';

// const thunk =
//   ({ dispatch, getState }) =>
//   next =>
//   action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action);

// const loggerMiddleware = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   console.groupEnd(action.type);

//   return next(action);
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
