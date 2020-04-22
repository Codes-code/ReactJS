import React from 'react';
import unsplash from '../api/unsplash';
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

        this.state={images:[]};
    }


    /* To wait to a function to get completed, and to make it synchronus, we put async in front. 
    for eg. we do 'async example(){}' or 'example = async () => {}' 
    we can then put 'const temp = await miniexample.get();' inside it. to wait and feed the result into temp. */

    async onSearchSubmit(searchterm) {

        console.log("form submitted-- "+ searchterm);

        const response = await unsplash.get( '/search/photos',
            {
                params: {query: searchterm}
            }
        ); 

        this.setState({images: response.data.results});
        console.log(this.state.images);
        

    }


    render() {
        return(
            <div>
                <h2 style={{marginLeft:'70px'}}>Cars App</h2>
                <div className='SearchBar ui container' style={{marginTop:'10px'}}><SearchBar whenSubmit= {this.onSearchSubmit} /></div>
                <div className='Text ui container' style={{marginTop:'10px'}}>No. of Images Found: {this.state.images.length}</div>
                <div className='ImageList ui container' style={{marginTop:'10px'}}><ImageList /></div>
            </div>
        );
    }
}

export default App;