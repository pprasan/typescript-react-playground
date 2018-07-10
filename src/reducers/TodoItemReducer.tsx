import { ITodoItem, ITodoListState } from '../store';
import { TodoItemAction } from '../actions/TodoItem';
import { CHECK_ITEM, UNCHECK_ITEM } from '../constants/Actions';

export const TodoItemReducer = (state: ITodoListState, action: TodoItemAction): ITodoListState => {
  let items: Map<string, ITodoItem> = new Map(state.items);
  let itemId: string;
  let item;

  switch(action.type) {
    case CHECK_ITEM:
      itemId = action.payload;
      item = items.get(itemId);
      if(item !== undefined) {
        item.checked = true;
        items.set(itemId, item);
      }
      return {items: items};

    case UNCHECK_ITEM:
      itemId = action.payload;
      item = items.get(itemId);
      if(item !== undefined) {
        item.checked = false;
        items.set(itemId, item);
      }
      return {items: items};

    default:
      return state;
  }
};