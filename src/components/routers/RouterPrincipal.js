import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from "../Home" 
import Invitacion from "../Invitacion.js";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/invitacion' element={<Home/>} />
        <Route path='/invitacion/*' element={<Invitacion/>} />
      </Routes>
    </BrowserRouter>
  );
};
