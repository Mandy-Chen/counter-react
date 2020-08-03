import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import changeCount from './Reducer/Reduce'
import CountApp from "./Containers/CounterContainer";
const store = createStore(changeCount);
ReactDOM.render(
  <Provider store={store}>
    <CountApp />
  </Provider>,
  document.getElementById('root')
);