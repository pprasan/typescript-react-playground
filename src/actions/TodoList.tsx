import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';
import { ITodoItem } from '../store';

interface IAddItem {
  type: ADD_ITEM;
  payload: ITodoItem;
}

interface IRemoveItem {
  type: REMOVE_ITEM;
  payload: string;
}

export type TodoListAction = IAddItem | IRemoveItem;

