import { ADD_CASH } from '../actions/index';
import { BUY_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CASH:
      return action.payload+ +state;
    case BUY_ITEM:
      return +state - action.payload.price;
  }
  return state;
}