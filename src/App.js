import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Correcto: Importando el Switch correcto
import Home from "../src/components/Home.js";
import Invitacion from "../src/components/Invitacion.js"

function App() {
  return (
    <Router>
      <Switch> {/* Correcto: Este es el Switch correcto */}
        <Route exact path="/" component={Home} />
        <Route path="/invitacion/*" component={Invitacion} />
      </Switch>
    </Router>
  );
}

export default App;
