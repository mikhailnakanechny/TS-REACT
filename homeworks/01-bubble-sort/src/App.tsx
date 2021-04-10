import React from 'react';
import {SortField} from './components/SortField'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bubble sort visualization</h1>
      </header>
      <main className="App-main">
        <SortField />
      </main>
    </div>
  );
}

export default App;
