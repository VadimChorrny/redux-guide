import { createStore, combineReducers } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { clientReducer } from './reducers/clientReducer';

const rootReducer = combineReducers({
  // reducers collection
  // combineReducer for merge all reducers
  // cashReducer
  cashR: cashReducer,
  clientsR: clientReducer,
});

export const store = createStore(rootReducer);
