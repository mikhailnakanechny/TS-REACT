import React from 'react';
import './App.css';
import PictureField from './components/PictureField'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Yandex-like layout
        </h1>
      </header>
      <main>
        <div className="demo-image">
          <PictureField />
        </div>
      </main>
    </div>
  );
}

export default App;
