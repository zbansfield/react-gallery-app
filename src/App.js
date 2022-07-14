import React, { useEffect, useState } from 'react';
import apiKey from './config';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

export default function App() {

  // To keep track on the current url 
  let location = useLocation();
  let navigate = useNavigate()
  let path;
  
  // Declaring state variables
  const [category, setCategory] = useState('birds');
  const [photos, setPhotos] = useState([]);

  // Using the pathname to update the url for data fetching  
  if (location.pathname === '/') {
    path = 'birds';
  } else {
    path = location.pathname.substring(1);
  }

  // useEffect() hook to re-fetch the data only when the url path changes 
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

  return (
    <div className="container">
      <Search changeCategory={category => setCategory(category)} navigate={navigate} />

      <nav className="main-nav">
        <ul>
            <Nav category='birds' changeCategory={category => setCategory(category)}/>
            <Nav category='sunset' changeCategory={category => setCategory(category)}/>
            <Nav category='trees' changeCategory={category => setCategory(category)}/>
        </ul>
      </nav>

      {/* Setting Routes */}
      <Routes>
        <Route path='/' element={<PhotoContainer category={'birds'} photos={photos}/>}/>
        <Route path='/birds' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/sunset' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/trees' element={<PhotoContainer category={path} photos={photos}/>}/>
        <Route path='/:category' element={<PhotoContainer category={category} photos={photos}/>}/>
      </Routes>
    </div>
  );
}
