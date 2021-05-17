/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
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
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:1234';

export const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error));
  }
  // axios
  //   .get('/todos')
  //   .then(({ data }) => dispatch(fetchTodosSuccess(data)))
  //   .catch(error => dispatch(fetchTodosError(error)));
};

export const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

export const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

export const toggleCompletedTodo =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error)));
  };
