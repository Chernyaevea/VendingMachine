import { FETCH_ITEMS } from '../actions/index';
import { BUY_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    case BUY_ITEM:{
      return state.map(item => {
        if (item.id === action.payload.id)
          item.count--;
        return item;
      }) 
    }
  }
  return state;
}