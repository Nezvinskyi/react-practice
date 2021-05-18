/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';
const getIsLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.length;
};

const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  console.log('getting completed todos');
  return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
});

// const getCompletedTodoCount = state => {
//   const todos = getAllTodos(state);
//   console.log('getting completed todos');

//   return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
// };

const getPendingTodoCount = createSelector([getAllTodos], todos => {
  return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
});

// const getPendingTodoCount = state => {
//   const todos = getAllTodos(state);
//   return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
// };

// const getFilteredTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);
//   console.log('getting all todos');

//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

const getFilteredTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    console.log('getting all todos');
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getIsLoading,
  getFilter,
  getFilteredTodos,
  getTotalTodoCount,
  getCompletedTodoCount,
  getPendingTodoCount,
};
