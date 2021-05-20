import { createAction } from '@reduxjs/toolkit';

export const onIncrement = createAction('counter/toolkit/increment');
export const onDecrement = createAction('counter/toolkit/decrement');
export const onSetStep = createAction('counter/toolkit/setSep');
