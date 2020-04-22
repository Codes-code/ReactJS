import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    constructor(props){

        super(props);
        this.onSearchSubmit=this.onSearchSubmit.bind(this);
        /* Using this binding to reconfigure our 'this' because here our this refers to onSubmit. 
        - down where i do this.setState({}), that 'this' is unable to refer our app component because
        it refers to it's callback, so go to where the onSearchSubmit is being called. from where searchterm
        is coming. it's coming from searchbar.js , there it's being called from onFormSubmit, as whensubmit. 
        now, in there the item to the left of the function call whensubmit(), is 'props.', hence this state is refering to
        the object 'props' of onFormSubmit. which is coming from this.onformsubmit through OnSubmit property 
        of the Form div. So, hence the whole state was refering to the OnSubmit. and now we've forced it to bind
        to our App component, and not the OnSubmit.  */ 
        
        this.state={ n:null, counter:0, images:[]};
    }

    async onSearchSubmit(searchterm) {

        console.log("form submitted-- "+ searchterm);

        const response = await axios.get( 
            'https://api.unsplash.com/search/photos',
            {
                params: {query: searchterm},
                headers: {Authorization : 'Client-ID euvETru-dyZew23SFLrejHKJLSXynaR0brs4fDw68Ms'}
            }
        );

        this.setState({images: response.data.results});
        console.log(this.state.images);

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