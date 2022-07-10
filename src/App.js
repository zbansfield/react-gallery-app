import React, { Component, useEffect } from 'react';
import './App.css';
import apiKey from './config';
import { BrowserRouter, Route, Link, NavLink, Routes, Switch } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

import axios from 'axios';


class App extends Component {
  

  constructor() {
    super();
        this.state = {
          photos: []
        }
  } 

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}&text=birds&per_page=24&nojsoncallback=?`)
    .then(res => res.json())
    .then(data => {
        this.setState({
          photos: data.photos.photo
        })
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }

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

  render() {
    return (
      <div className="container">
        <Search />
        <Nav apiKey={apiKey} photos={ {cats: this.state.photos, dogs:this.state.photos, computers: this.state.photos}}/>
        {/* <Routes>
        </Routes> */}
      </div>
    );
  }

}

export default App;