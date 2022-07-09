import React, { Component } from "react";
import apiKey from "./config";
import Photo from "./Photo";
import NoResults from "./NoResults";

import axios from "axios";

const PhotoContainer = ({apiKey}) => {

    let photos;
    https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${apiKey}

    fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.getRecent&api_key=${apiKey}&text=cats&per_page=24&nojsoncallback=?`)
        .then(res => res.json())
        .then(data => {
            photos = data
            console.log(data.photos.photo)
        })
        .catch(error => {
        console.log('Error fetching and parsing data', error);
        });

    let results = photos.map(photo => 
        <Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
    )

    // if (results.length > 0 ) {
    //     let photos = results.map(photo => 
    //       <Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
    //     )
    //   } else {
    //     photos = <NoResults />
    //   }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoContainer;