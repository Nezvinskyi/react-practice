import axios from 'axios';
import * as actions from './actions';

export const getTodos = () => (dispatch, getState) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('http://localhost:5000/todos')
    .then(({ data }) => dispatch(actions.getTodosSucces(data)))
    .catch(error => dispatch(actions.getTodosFailure(error.message)));
};

export const addTodo = payload => (dispatch, getState) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('http://localhost:5000/todos', payload)
    .then(({ data }) => dispatch(actions.addTodoSucces(data)))
    .catch(error => dispatch(actions.addTodoFailure(error.message)));
};
