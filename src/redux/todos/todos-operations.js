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

// axios.defaults.baseURL = 'http://localhost:5000';

export const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/tasks');
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
  // axios
  //   .get('/todos')
  //   .then(({ data }) => dispatch(fetchTodosSuccess(data)))
  //   .catch(error => dispatch(fetchTodosError(error)));
};

export const addTodo = description => dispatch => {
  const todo = { description, completed: false };

  dispatch(addTodoRequest());

  axios
    .post('/tasks', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error.message)));
};

export const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/tasks/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error.message)));
};

export const toggleCompletedTodo =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/tasks/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };
