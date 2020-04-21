import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state={ n:null, counter:0, images:null};

    async onSearchSubmit(searchterm) {

        console.log("form submitted-- "+ searchterm);

        const response = await axios.get( 
            'https://api.unsplash.com/search/photos',
            {
                params: {query: searchterm},
                headers: {Authorization : 'Client-ID euvETru-dyZew23SFLrejHKJLSXynaR0brs4fDw68Ms'}
            }
        )

        console.log(response.data.results);
    }

    render() {
        return(
            <div>
                <h1>Cars App</h1>
                <div className='SearchBar ui container' style={{marginTop:'10px'}}><SearchBar whenSubmit= {this.onSearchSubmit} /></div>
                <div className='ImageList'><ImageList /></div>
            </div>
        );
    }
}

export default App;