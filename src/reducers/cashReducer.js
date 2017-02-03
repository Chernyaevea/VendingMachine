import { ADD_CASH } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CASH:
      return action.payload
  }
  return state;
}