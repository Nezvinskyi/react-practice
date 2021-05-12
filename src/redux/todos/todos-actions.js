/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import actionTypes from './todos-types';

// before
// const addTodo = text => ({
//   type: actionTypes.ADD,
// payload: {
//   id: shortid.generate(),
//   text,
//   completed: false,
// },
// });

const addTodo = createAction('todos/add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

// before
// const deleteTodo = todoId => ({
//   type: actionTypes.DELETE,
//   payload: todoId,
// });

const deleteTodo = createAction('todos/delete');

// const toggleTodo = todoId => ({
//   type: actionTypes.TOGGLE_COMPLETED,
//   payload: todoId,
// });

const toggleTodo = createAction('todos/toggleCompleted');

// before
// const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

const changeFilter = createAction('todos/changeFilter');

export default { addTodo, deleteTodo, toggleTodo, changeFilter };
