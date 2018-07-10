import { CHECK_ITEM, UNCHECK_ITEM } from '../constants/Actions';

interface ICheckItem {
  type: CHECK_ITEM;
  payload: string;
}

interface IUncheckItem {
  type: UNCHECK_ITEM;
  payload: string;
}

export type TodoItemAction = ICheckItem | IUncheckItem;