import React from 'react';
import './App.css';

// https://dog.ceo/api/breed/corgi-cardigan/images
// https://images.dog.ceo/breeds/corgi-cardigan

fetch("https://dog.ceo/api/breed/corgi/cardigan/images")
  .then(response => {
    console.log(response);
    // console.log(response.json());
  })
  .catch(err => {
    console.error(err);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yandex-like layout
        </p>
      </header>
      <main>
        <div className="demo-image">
          <img src="https://images.dog.ceo/breeds/corgi-cardigan/n02113186_8794.jpg"/>            
        </div>
      </main>
    </div>
  );
}

export default App;
