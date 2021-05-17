/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1234';

const fetchTodos = () => {
  return axios.get('/todos').then(response => response.data);
};

const addTodo = todo => {
  return axios.post('/todos', todo).then(response => response.data);
};

const deleteTodo = todoId => {
  return axios.delete(`/todos/${todoId}`);
};

const updateTodo = (todoId, update) => {
  return;
};

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
