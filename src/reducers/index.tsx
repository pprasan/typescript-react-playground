import { combineReducers, Reducer } from 'redux';
import { TodoListReducer } from './TodoListReducer';
import { TodoItemReducer } from './TodoItemReducer';

export const TodoReducers: Reducer = combineReducers({
  TodoItemReducer,
  TodoListReducer
});