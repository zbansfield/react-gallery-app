import React, { Component, useEffect, useState } from 'react';
import './App.css';
import apiKey from './config';
import { BrowserRouter, Route, Link, NavLink, Routes } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

import axios from 'axios';


export default function App() {
  
  const [category, setCategory] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}&text=${category}&per_page=24&nojsoncallback=?`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.photos.photo)
      })
      .catch(error => {
      console.log('Error fetching and parsing data', error);
      });
  }, [category])

  // const changeCategory = (input = 'cats') => {
  //   setCategory(input);
  // }

  // componentDidMount() {
  //   fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}&text=birds&per_page=24&nojsoncallback=?`)
  //   .then(res => res.json())
  //   .then(data => {
  //       this.setState({
  //         photos: data.photos.photo
  //       })
  //   })
  //   .catch(error => {
  //   console.log('Error fetching and parsing data', error);
  //   });
  // }

  // search = (category) => {
  //   fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.getRecent&api_key=${apiKey}&text=${category}&per_page=24&nojsoncallback=?`)
  //       .then(res => res.json())
  //       .then(data => {
  //           this.setState({
  //             photos: data.photos.photo
  //           })
  //       })
  //       .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //       });
  // }

    return (
      <div className="container">
        <Search />
        <nav className="main-nav">
          <ul>
              <Nav category='birds' changeCategory={category => setCategory(category)}/>
              <Nav category='books' changeCategory={category => setCategory(category)}/>
              <Nav category='trees' changeCategory={category => setCategory(category)}/>
          </ul>
        </nav>

        <Routes>
          <Route path='/birds' element={<PhotoContainer category={category} photos={photos}/>}/>
          <Route path='/trees' element={<PhotoContainer category={category} photos={photos}/>}/>
          <Route path='/books' element={<PhotoContainer category={category} photos={photos}/>}/>
        </Routes>
        {/* <Nav apiKey={apiKey} changeCategory={category => {setCategory(category)}} photos={photos}/> */}
        {/* <Routes>
        </Routes> */}
      </div>
    );
}
