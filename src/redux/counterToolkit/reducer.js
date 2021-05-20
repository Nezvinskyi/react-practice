import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { onIncrement, onDecrement, onSetStep } from './actions';

const initialState = {
  value: 65,
  step: 1,
};

const value = createReducer(initialState.value, {
  [onIncrement]: (state, action) => state + action.payload,
  [onDecrement]: (state, action) => state - action.payload,
});

const step = createReducer(initialState.step, {
  [onSetStep]: (_, action) => action.payload,
});

export default combineReducers({ value, step });
