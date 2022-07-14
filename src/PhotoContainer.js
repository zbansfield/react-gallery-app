import React from "react";
import Photo from "./Photo";
import NoResults from "./NoResults";

const PhotoContainer = (props) => {
    
    const photos = props.photos;
    let results = [];

    // Adding a <Photo/> component for each photo to results array 
    // if there are no photos then adding the <NoResults/> component instead
    if (photos.length > 0 ) {
        photos.forEach(photo => {
            results.push(<Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>)
        });
    } else {
        results = <NoResults />
    }

    return (
        <div className="photo-container">
            <h2>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h2>
            <ul>
                {results}
            </ul>
        </div>
    )
}

export default PhotoContainer;