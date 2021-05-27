import axios from 'axios';
import * as actions from './actions';
import { toast } from 'react-toastify';

export const getTodos = () => (dispatch, getState) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('http://localhost:5000/todos')
    .then(({ data }) => dispatch(actions.getTodosSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.getTodosFailure(error.message));
    });
};

export const addTodo = payload => (dispatch, getState) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('http://localhost:5000/todos', payload)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.addTodoFailure(error.message));
    });
};

export const deleteTodo = id => (dispatch, getState) => {
  dispatch(actions.deleteTodoRequest());

  axios
    .delete(`http://localhost:5000/todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.deleteTodoFailure(error.message));
    });
};

export const toggleTodo = todo => (dispatch, getState) => {
  dispatch(actions.toggleTodoRequest());

  axios
    .patch(`http://localhost:5000/todos/${todo.id}`, todo)
    .then(({ data }) => dispatch(actions.toggleTodoSuccess(todo.id)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.toggleTodoFailure(error.message));
    });
};
