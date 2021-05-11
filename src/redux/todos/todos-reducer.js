import { combineReducers } from 'redux';
import actionTypes from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
