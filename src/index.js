import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Books from "./Components/booksPage.js";
import './app.css';


const root = ReactDOM.createRoot(document.getElementById('root')); //gets the element that holds
root.render(//renders my react'js logic
  <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/books/:searchId" element={<Books/>} />
      </Routes>
    </Router>
);

