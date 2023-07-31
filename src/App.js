import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Aquí se importa Switch correctamente
import Home from "../src/components/Home.js";
import Invitacion from "../src/components/Invitacion.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/invitacion/*" component={Invitacion} />
      </Switch>
    </Router>
  );
}

export default App;
