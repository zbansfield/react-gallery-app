import React, { useEffect, useState } from 'react';
import apiKey from './config';
import { Route, Routes, useLocation } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

var createBrowserHistory = require("history").createBrowserHistory

export default function App() {

  let location = useLocation();
  let path;
  
  const [category, setCategory] = useState('birds');
  const [photos, setPhotos] = useState([]);

  if (location.pathname === '/') {
    path = 'birds';
  } else {
    path = location.pathname.substring(1);
  }

  useEffect(() => {
    fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}&text=${path}&per_page=24&nojsoncallback=?`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.photos.photo);
      })
      .catch(error => {
        setPhotos([])
      console.log('Error fetching and parsing data', error);
      });
  }, [path])

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
    console.log(category)
  }, [category])

  return (
    <div className="container">
      <Search changeCategory={category => setCategory(category)} history={createBrowserHistory()} />

      <nav className="main-nav">
        <ul>
            <Nav category='birds' changeCategory={category => setCategory(category)}/>
            <Nav category='books' changeCategory={category => setCategory(category)}/>
            <Nav category='trees' changeCategory={category => setCategory(category)}/>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<PhotoContainer category={'birds'} photos={photos}/>}/>
        <Route path='/birds' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/books' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/trees' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/:category' element={<PhotoContainer category={category} photos={photos}/>}/>
      </Routes>
    </div>
  );
}
