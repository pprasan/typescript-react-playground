import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEM, UNCHECK_ITEM } from '../constants/Actions';
import { ITodoItem } from '../store';

interface IAddItem {
  type: ADD_ITEM;
  payload: ITodoItem;
}

interface IRemoveItem {
  type: REMOVE_ITEM;
  payload: string;
}

interface ICheckItem {
  type: CHECK_ITEM;
  payload: string;
}

interface IUncheckItem {
  type: UNCHECK_ITEM;
  payload: string;
}

export type UpdateItem = IAddItem | IRemoveItem | ICheckItem | IUncheckItem;

