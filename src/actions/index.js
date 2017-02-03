export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_CASH = 'ADD_CASH';


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
