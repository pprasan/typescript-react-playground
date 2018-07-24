import { ITodoListState } from '../store';
import { TodoItemAction } from '../actions/TodoItem';
import { CHECK_ITEM, UNCHECK_ITEM } from '../constants/Actions';

export function TodoItemReducer(state: ITodoListState, action: TodoItemAction): ITodoListState {
  switch(action.type) {
    case CHECK_ITEM:
      return getUpdatedState(state, action.payload, true);

    case UNCHECK_ITEM:
      return getUpdatedState(state, action.payload, false);

    default:
      return state;
  }
}

function getUpdatedState(state: ITodoListState, itemToUpdate: string, newValue: boolean): ITodoListState {
  if(state.hasOwnProperty(itemToUpdate)) {
    return { ...state, [itemToUpdate]: newValue};
  }
  else {
    throw new Error("Item " + itemToUpdate + " doesn't exist in the Todo List");
  }
}