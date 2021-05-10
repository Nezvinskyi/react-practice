import { combineReducers } from 'redux';
import * as actionTypes from './counter-types';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 12, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
