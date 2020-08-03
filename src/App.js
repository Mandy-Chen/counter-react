import React from 'react';
import './App.css';
import CounterGroup from './Components/CounterGroup';
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
