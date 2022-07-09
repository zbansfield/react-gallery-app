import React, { Component } from 'react';
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
          pics: [],
          loading: true
        }
  } 

  componentDidMount() {
    this.search()
  }

  search(category) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${category}&per_page=24&format=rest&auth_token=72157720849787198-4dc616ddf2371515&api_sig=11fd533afae8f5dd965cef209c7b9fcb`)
    .then(response => {
      this.setState({
        pics: response.data.data,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">
        <Search />
        <Nav apiKey={apiKey}/>
        {/* <Routes>
        </Routes> */}
      </div>
    );
  }

}

export default App;