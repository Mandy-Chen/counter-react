import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import countReduce from './Reducers/Reduce'
import APP from "./App";
const storeCount = createStore(countReduce);
ReactDOM.render(
  <Provider store={storeCount}>
    <APP />
  </Provider>,
  document.getElementById('root')
);