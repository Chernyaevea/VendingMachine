import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_CASH = 'ADD_CASH';

// we assume this data comes from api,
// in a real case it should be like
// 
// const items = axios.get(url);

// const items = [
//   { id: 'Coca Cola', price: 30 , count: 10},
//   { id: 'Sprite', price: 32, count: 2},
//   { id: 'Fanta', price: 12, count: 0},
//   { id: 'Bonaqua', price: 43, count: 3},
//   { id: 'Lipton', price: 23, count: 4}
// ];

export function fetchItems(items){
  
  return {
  type: FETCH_ITEMS,
  payload: items
  }
}

export function addCash(cash){

  return {
    type: ADD_CASH,
    payload: cash
  }
}
