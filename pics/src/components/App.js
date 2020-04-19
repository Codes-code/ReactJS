import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state={ n:null, counter:0};

    render() {
        return(
            <div>
                <h1>Cars App</h1>
                <div className='SearchBar ui container' style={{marginTop:'10px'}}><SearchBar/></div>
                <div className='ImageList'><ImageList/></div>
            </div>
        );
    }
}

export default App;