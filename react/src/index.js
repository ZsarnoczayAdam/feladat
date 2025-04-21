import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import App from './App.js';
import UseEffectStarWars from './use-effect/UseEffectStarWars.jsx';
import MyComponent from './use-state/MyComponent.jsx';
import FetchComponent from './fetch-examples/FetchComponent.jsx';
import Empanadas from './fetch-examples/Empanadas.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));







root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/fetch-example" element={<Empanadas />}></Route>
        <Route path="/counter" element={<MyComponent />}></Route>
        <Route path="/star-wars" element={<UseEffectStarWars />}></Route>
        <Route path="/new-empanada" element={<FetchComponent />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
