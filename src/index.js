import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// FIST LESSON

// fist step: need create store (const store = createStore(reducer);)
// second step: need wrap all components in "Provider"
// third step: create reducer
