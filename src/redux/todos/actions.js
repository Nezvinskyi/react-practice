import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
export const toggleTodo = createAction(types.TOGGLE_TODO);

export const getTodosRequest = createAction('GET_TODOS_REQUEST');
export const getTodosSucces = createAction('GET_TODOS_SUCCESS');
export const getTodosFailure = createAction('GET_TODOS_FAILURE');

export const addTodoRequest = createAction('ADD_TODO_REQUEST');
export const addTodoSucces = createAction('ADD_TODO_SUCCESS');
export const addTodoFailure = createAction('ADD_TODO_FAILURE');
