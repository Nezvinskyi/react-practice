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

export default { addTodo, deleteTodo };
