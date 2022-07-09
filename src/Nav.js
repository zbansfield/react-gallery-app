import React, { Component } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import PhotoContainer from "./PhotoContainer";

const Nav = ({apiKey}) => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>

        <Routes>
            <Route path='/cats' element={<PhotoContainer apiKey={apiKey}/>}/>
            <Route path='/dogs' element={<PhotoContainer apiKey={apiKey}/>}/>
            <Route path='/computers' element={<PhotoContainer apiKey={apiKey}/>}/>
        </Routes>
    </nav>

);

export default Nav;