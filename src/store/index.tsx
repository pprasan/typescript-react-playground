import { createStore } from 'redux';
import { TodoReducers } from '../reducers';

export interface ITodoItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ITodoListState {
  items: Map<string, ITodoItem>;
}

export const store = createStore<ITodoListState, any, any, any>(TodoReducers, {
  items: new Map()
});