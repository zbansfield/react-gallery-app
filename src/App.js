import React, { useEffect, useState } from 'react';
import apiKey from './config';
import { Route, Routes } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

var createBrowserHistory = require("history").createBrowserHistory

export default function App() {
  
  const [category, setCategory] = useState('birds');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}&text=${category}&per_page=24&nojsoncallback=?`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.photos.photo)
      })
      .catch(error => {
        setPhotos([])
      console.log('Error fetching and parsing data', error);
      });
  }, [category])

  return (
    <div className="container">
      <Search changeCategory={category => setCategory(category)} history={createBrowserHistory()}/>

      <nav className="main-nav">
        <ul>
            <Nav category='birds' changeCategory={category => setCategory(category)}/>
            <Nav category='books' changeCategory={category => setCategory(category)}/>
            <Nav category='trees' changeCategory={category => setCategory(category)}/>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<PhotoContainer category={'birds'} photos={photos}/>}/>
        <Route path='/birds' element={<PhotoContainer category={category} photos={photos}/>}/>
        <Route path='/books' element={<PhotoContainer category={category} photos={photos}/>}/>
        <Route path='/trees' element={<PhotoContainer category={category} photos={photos}/>}/>
        <Route path='/:category' element={<PhotoContainer category={category} photos={photos}/>}/>
      </Routes>
    </div>
  );
}
