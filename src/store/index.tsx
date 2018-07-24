import { createStore } from 'redux';
import { TodoReducers } from '../reducers';

export interface ITodoListState {
  [index: string] : boolean;
}

export const store = createStore<ITodoListState, any, any, any>(TodoReducers, {});