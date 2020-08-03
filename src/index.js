// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import { createStore } from "redux";
import { combineReducers } from 'redux';
const initialCountState = {
  count: 0
}
const initialSumState = {
  sum: 0
}
const INCREASE = 'INCREASE';
const sumReducer = function (state = initialSumState, action) {
  return state;
}
const countReducer = function (state = initialCountState, action) {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        count: [...state.count, action.payload]
      }
    }
    default:
      return state;
  }
}
const allReduers = {
  sum: sumReducer,
  count: countReducer
}
const rootReducer = combineReducers(allReduers);
let store = createStore(rootReducer)
console.log(store.getState())

function increase(count) {
  return {
    type: INCREASE,
    payload: { count }
  }
}
let unsubscribe = store.unsubscribe(() =>
  console.log(store.getState())
);
store.dispatch(INCREASE(1111))
unsubscribe();