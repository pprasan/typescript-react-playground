import { TodoListAction } from '../actions/TodoList';
import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';
import { ITodoItem, ITodoListState } from '../store';

export const TodoListReducer = (state: ITodoListState, action: TodoListAction): ITodoListState => {
  let newItems: Map<string, ITodoItem> = new Map(state.items);

  switch (action.type) {
    case ADD_ITEM:
      const item: ITodoItem = action.payload;
      newItems.set(item.id, item);
      return { items: newItems};

    case REMOVE_ITEM:
      const itemId: string = action.payload;
      newItems.delete(itemId);
      return {items: newItems};

    default:
      return state;
  }
};