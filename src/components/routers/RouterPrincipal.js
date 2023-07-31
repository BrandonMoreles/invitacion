// RouterPrincipal.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../Home" 
import Invitacion from "../Invitacion.js";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de inicio */}
        <Route path='/' element={<Home />} />
        
        {/* Ruta de Invitacion */}
        <Route path='/invitacion/*' element={<Invitacion />} />
        
        {/* ... otras rutas principales ... */}
      </Routes>
    </BrowserRouter>
  );
};
