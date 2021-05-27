import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import types from './types';

import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  addTodoSuccess,
  addTodoFailure,
  addTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  toggleTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
} from './actions';

const initialState = {
  isLoading: false,
  items: [],
  error: '',
};

const isLoading = createReducer(initialState.isLoading, {
  [getTodosRequest]: () => true,
  [getTodosSuccess]: () => false,
  [getTodosFailure]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoFailure]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoFailure]: () => false,
  [toggleTodoRequest]: () => true,
  [toggleTodoSuccess]: () => false,
  [toggleTodoFailure]: () => false,
});

const items = createReducer(initialState.items, {
  [getTodosSuccess]: (_, action) => action.payload,
  [addTodoSuccess]: (state, action) => [...state, action.payload],
  [deleteTodoSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [toggleTodoSuccess]: (state, action) =>
    state.map(todo => {
      return todo.id === action.payload
        ? { ...todo, isDone: !todo.isDone }
        : todo;
    }),
});

const error = createReducer(initialState.error, {
  [getTodosFailure]: (_, action) => action.payload,
  [addTodoFailure]: (_, action) => action.payload,
  [deleteTodoFailure]: (_, action) => action.payload,
  [toggleTodoFailure]: (_, action) => action.payload,
});

export default combineReducers({ items, isLoading, error });
