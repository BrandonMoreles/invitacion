import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterPrincipal } from './components/routers/RouterPrincipal';

function App() {
  return (
    <div className="App">
      {/* Envuelve RouterPrincipal dentro de BrowserRouter */}
      <BrowserRouter>
        <RouterPrincipal />
      </BrowserRouter>
    </div>
  );
}

export default App;
