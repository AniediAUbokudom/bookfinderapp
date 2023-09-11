import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './Components/homePage';
import booksPage from "./Components/booksPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/books/:id" component={booksPage} />
      </Routes>
    </Router>
  );
}

export default App;
