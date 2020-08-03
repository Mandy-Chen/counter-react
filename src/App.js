import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterGroup from './Components/CounterGroup';
import GetCount from './Components/GetSum';
import GetSum from './Components/GetSum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup></CounterGroup>
        <GetSum></GetSum>
      </header>
    </div>
  );
}

export default App;
