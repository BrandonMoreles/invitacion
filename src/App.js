import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Aquí se importa Switch correctamente
import Home from "../src/components/Home.js";
import Invitacion from "../src/components/Invitacion.js"

function App() {
  return (
    <Router basename='/invite'>
      <Routes >
        <Route exact path="/" component={Home} />
        <Route path="/invitacion/*" component={Invitacion} />
      </Routes>
    </Router>
  );
}

export default App;
