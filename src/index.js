import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from './components/Homepage';
import {FavoritePage} from './components/FavoritePage';
import {RandomPage} from './components/RandomPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Random" element={<RandomPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Routes> 
      {/* <App /> */}
    </BrowserRouter>
);


reportWebVitals();
