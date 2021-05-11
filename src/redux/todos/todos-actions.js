import shortid from 'shortid';
import actionTypes from './todos-types';
const addTodo = text => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: actionTypes.DELETE,
  payload: todoId,
});

const toggleTodo = todoId => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: todoId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export default { addTodo, deleteTodo, toggleTodo, changeFilter };
