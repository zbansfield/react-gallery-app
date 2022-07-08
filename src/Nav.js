import React, { Component } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import PhotoContainer from "./PhotoContainer";

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>

        <Routes>
            <Route path='/cats' element={<PhotoContainer />}/>
            <Route path='/dogs' element={<PhotoContainer />}/>
            <Route path='/computers' element={<PhotoContainer />}/>
        </Routes>
    </nav>

);

export default Nav;