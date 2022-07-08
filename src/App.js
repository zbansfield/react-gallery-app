import React from 'react';
import './App.css';
import apiKey from './config';
import { BrowserRouter, Route, Link, NavLink, Routes } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      {/* <Routes>
      </Routes> */}
    </div>
  );
}

export default App;