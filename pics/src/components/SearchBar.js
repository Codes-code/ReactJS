import React from 'react';

class SearchBar extends React.Component {

    state={term:'search cars..'};
    
    onInputClicked(event) {
        console.log("input clicked--"+ event.target.value); 
        console.log(this.state.term);
    }

    /*onInputChanged(e) {
        this.setState({term: e.target.value});
        //console.log(this.state.term);
    }*/

    onFormSubmit(e) {
        e.preventDefault();
        console.log('form submitted--'+ this.state.term)

    }


    //THIS refers to the object to the left of the function call.



    /* INSTEAD OF STORING INFORMATION INSIDE THE DOM, AND HAVING TO GO TO THE INPUT TAG
    TO GET TO KNOW WHAT THE USER HAS TYPES, WE ARE CONTROLING THE INFO THROUGH REACT, AND 
    STORING THE INPUT IN OUR STATE. SO WE CAN CONTORLL IT. THE INPUT TAG GETS THE TERM FROM
    REACT ITSELF.*/

    render() {
        return (
            <div className='SearchBar ui segment'>
                <form  onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <i className='car icon' onClick={(e)=>this.setState({term: 'Alfa Romeo Guilia Quadrifoglio'})}></i>
                        <label>Image Search</label>
                        <input
                            type="text"
                            onClick={this.onInputClicked} 
                            value={this.state.term}
                            onChange={(e)=>this.setState({term: e.target.value})}
                            //takes the value, puts it in state, that causes the render() to be called, which erases the previous input text, so now we provide it with the term through the 'value=' before it had re-rendered. we're doing unnecessary work, just to make sure 'state' and 'react' have all the power. 
                            //for eg. if we want Capital text to appear, no matter what the user types. then we can do that. or if we want starred items to appear no matter what the user types. 
                        >
                        </input>
                        {/*<div>{this.state.term}</div>*/}
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;