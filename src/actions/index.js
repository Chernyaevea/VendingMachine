export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_CASH = 'ADD_CASH';
export const BUY_ITEM = 'BUY_ITEM';

export function fetchItems(items){
  console.log('items have been fetched');
  return {
  type: FETCH_ITEMS,
  payload: items
  }
}

export function addCash(cash){
  console.log('cash has been added');
  return {
    type: ADD_CASH,
    payload: cash
  }
}

export function buyItem(item){
  console.log('item has been bought');
  return {
    type: BUY_ITEM,
    payload: item
  }
}
