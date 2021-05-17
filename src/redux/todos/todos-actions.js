/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('todo/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todos/fetchTodosSuccess');
export const fetchTodosError = createAction('todos/fetchTodosError');

export const addTodoRequest = createAction('todo/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todo/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const toggleCompletedRequest = createAction(
  'todo/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'todos/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction('todos/toggleCompletedError');

export const changeFilter = createAction('todos/changeFilter');
