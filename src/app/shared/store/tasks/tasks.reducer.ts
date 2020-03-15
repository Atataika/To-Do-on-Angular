import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './tasks.actions';

const tasksLength = JSON.parse(localStorage.getItem('undoneTasks')).length - 1;

export const initialState = tasksLength ? tasksLength : 0;

const _tasksReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

export function tasksReducer(state, action) {
  return _tasksReducer(state, action);
}
