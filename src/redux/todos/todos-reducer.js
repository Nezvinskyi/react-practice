import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  changeFilter,
} from './todos-actions';

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, action) => [...state, action.payload],
  [deleteTodoSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
