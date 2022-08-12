import { createStore, combineReducers } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { clientReducer } from './reducers/clientReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // reducers collection
  // combineReducer for merge all reducers
  // cashReducer
  cashR: cashReducer,
  clientsR: clientReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

// FOR CONNECT REDUX DEVTOOLS TO OUR APPLICATION
// npm i redux-devtools-extension - for redux devtools
// import { composeWithDevTools } from 'redux-devtools-extension';
// composeWithDevTools()
