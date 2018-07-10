import { createStore } from 'redux';
import { UpdateItem } from '../actions';
import { TodoListReducer } from '../reducers/TodoListReducer';

export interface ITodoItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ITodoListState {
  items: Map<string, ITodoItem>;
}

const store = createStore<ITodoListState, UpdateItem, any, any>(TodoListReducer, {
  items: new Map()
});