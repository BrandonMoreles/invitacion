import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'; // Cambio de BrowserRouter a HashRouter
import { RouterPrincipal } from './components/routers/RouterPrincipal';

function App() {
  return (
    <div className="App">
      {/* Envuelve RouterPrincipal dentro de HashRouter */}
      <HashRouter>
        <RouterPrincipal />
      </HashRouter>
    </div>
  );
}

export default App;
