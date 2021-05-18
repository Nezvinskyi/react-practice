/* eslint-disable import/no-anonymous-default-export */
const getIsLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.length;
};

const getCompletedTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
};

const getPendingTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
};

const getFilteredTodos = state => {
  const todos = getAllTodos(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

export default {
  getIsLoading,
  getFilter,
  getFilteredTodos,
  getTotalTodoCount,
  getCompletedTodoCount,
  getPendingTodoCount,
};
