import { combineReducers } from 'redux';
import CashReducer from './cashReducer';
import ItemReducer from './itemReducer';

const rootReducer = combineReducers({
  cash: CashReducer,
  items: ItemReducer

});

export default rootReducer;