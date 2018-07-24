import { TodoListAction } from '../actions/TodoList';
import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';
import { ITodoListState } from '../store';

export function TodoListReducer(state: ITodoListState, action: TodoListAction): ITodoListState {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, [action.payload]: false };

    case REMOVE_ITEM:
      return Object
        .keys(state)
        .filter(item => (item !== action.payload))
        .reduce((newState, item) => {
          newState[item] = state[item];
          return newState;
        }, {});

    default:
      return state;
  }
}