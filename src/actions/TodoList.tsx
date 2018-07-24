import { ADD_ITEM, REMOVE_ITEM } from '../constants/Actions';

interface IAddItem {
  type: ADD_ITEM;
  payload: string;
}

interface IRemoveItem {
  type: REMOVE_ITEM;
  payload: string;
}

export type TodoListAction = IAddItem | IRemoveItem;

