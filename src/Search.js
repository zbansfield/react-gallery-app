import React, { Component } from "react";

class Search extends Component {

    // state = {
    //     searchText: '',
    //     photos: []
    // }
    
    // componentDidMount() {
    //     fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${this.props.apiKey}&text=birds&per_page=24&nojsoncallback=?`)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 photos: data.photos.photo
    //             })
    //         })
    //         .catch(error => {
    //         console.log('Error fetching and parsing data', error);
    //         });
    // }
    
    //   search = (category) => {
    //     fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.getRecent&api_key=${apiKey}&text=${category}&per_page=24&nojsoncallback=?`)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //               photos: data.photos.photo
    //             })
    //         })
    //         .catch(error => {
    //         console.log('Error fetching and parsing data', error);
    //         });
    //   }
    
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.category.value)
        e.currentTarget.reset();
    }
    
    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" name="search" placeholder="Search" required onChange={this.onSearchChange} ref={ (input) => this.category = input }/>
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </form>
        )
    }
}

export default Search;