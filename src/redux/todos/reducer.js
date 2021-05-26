import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import types from './types';

import {
  getTodosRequest,
  getTodosSucces,
  getTodosFailure,
  addTodoSucces,
  addTodoFailure,
  addTodoRequest,
} from './actions';

const initialState = {
  isLoading: false,
  items: [],
  error: '',
};

const isLoading = createReducer(initialState.isLoading, {
  [getTodosRequest]: () => true,
  [getTodosSucces]: () => false,
  [getTodosFailure]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSucces]: () => false,
  [addTodoFailure]: () => false,
});

const items = createReducer(initialState.items, {
  [getTodosSucces]: (_, action) => action.payload,
  [addTodoSucces]: (state, action) => [...state, action.payload],
});

const error = createReducer(initialState.error, {
  [getTodosFailure]: (_, action) => action.payload,
  [addTodoFailure]: (_, action) => action.payload,
});

export default combineReducers({ items, isLoading, error });
