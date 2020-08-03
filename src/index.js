import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import changeCount from './Reducers/Reduce'
import createCounter from './Reducers/createCounterReducer'
import CountApp from "./Containers/CounterContainer";
import AddCounter from "./Containers/CreateCounterContainer";
const storeCount = createStore(changeCount);
const storeCountGroup = createStore(createCounter);
ReactDOM.render(
  <Provider store={storeCount}>
    <CountApp />
  </Provider>,
  document.getElementById('root')
);