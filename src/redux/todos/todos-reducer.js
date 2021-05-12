import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './todos-actions';

// before
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     case actionTypes.TOGGLE_COMPLETED:
//       return state.map(todo =>
//         todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
//       );

//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [actions.addTodo]: (state, action) => [...state, action.payload],
  [actions.deleteTodo]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.toggleTodo]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo,
    ),
});

// before
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'todos/filter':
//       return payload;
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
