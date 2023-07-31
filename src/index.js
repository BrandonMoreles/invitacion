import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "../src/components/Home.js"
import Invitacion from "../src/components/Invitacion.js"
import { createHashRouter, RouterProvider } from 'react-router-dom'; // Cambio de BrowserRouter a HashRouter
const router= createHashRouter[
   { path:'/',
    element:Home},
    {path:"/invitacion",
  element:Invitacion}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
