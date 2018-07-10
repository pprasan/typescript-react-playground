import { UpdateItem } from '../actions';
import {
  ADD_ITEM,
  REMOVE_ITEM } from '../constants/Actions';
import {
  ITodoItem,
  ITodoListState } from '../store';

export const TodoListReducer = (state: ITodoListState, action: UpdateItem): ITodoListState => {
  let newItems: Map<string, ITodoItem> = new Map(state.items);
  let itemId: string;
  let item;

  switch (action.type) {
    case ADD_ITEM:
      item = action.payload;
      newItems.set(item.id, item);
      return { items: newItems};

    case REMOVE_ITEM:
      itemId = action.payload;
      newItems.delete(itemId);
      return {items: newItems};

    default:
      return state;
  }
};