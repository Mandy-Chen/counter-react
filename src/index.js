import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import changeCount from './Reducer/Reduce'
import CountApp from "./Containers/CounterContainer";
import CounterGroup from "./Components/CounterGroup";
const storeCount = createStore(changeCount);
const storeCountGroup = createStore(CounterGroup);
ReactDOM.render(
  <Provider store={storeCount}>
    <CountApp />
    <CounterGroup />
  </Provider>,
  <Provider store={storeCountGroup}>
    <CountApp />
    <CounterGroup />
  </Provider>,
  document.getElementById('root')
);