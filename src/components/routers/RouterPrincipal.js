import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; // Cambio de BrowserRouter a HashRouter
import Home from "../Home" 
import Invitacion from "../Invitacion.js";

export const RouterPrincipal = () => {
  return (
    <Routes>
      {/* Ruta de inicio */}
      <Route path='/' element={<Invitacion/>} />
      
      {/* Ruta de Invitacion */}
      <Route path='/invitacion/*' element={<Invitacion />} />
      
      {/* ... otras rutas principales ... */}
    </Routes>
  );
};
