import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "../src/components/Home.js";
import Invitacion from "../src/components/Invitacion.js";
import { HashRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/invitacion",
    element: <Invitacion />
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <RouterProvider routes={routes} />
  </HashRouter>
);
