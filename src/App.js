import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../src/components/Home.js";
import Invitacion from "../src/components/Invitacion.js";

function App() {
  return (
    <Router basename="/invite">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/invitacion/*" component={Invitacion} />
      </Switch>
    </Router>
  );
}

export default App;
