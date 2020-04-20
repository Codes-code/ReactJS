import React from 'react';

class SearchBar extends React.Component {

    state={term:''};
    
    onInputClicked(event) {
        console.log("input clicked--"+ event.target.value); 
        //console.log(this.state.term);
    }

    /*onInputChanged(e) {
        this.setState({term: e.target.value});
        //console.log(this.state.term);
    }*/




    /* INSTEAD OF STORING INFORMATION INSIDE THE DOM, AND HAVING TO GO TO THE INPUT TAG
    TO GET TO KNOW WHAT THE USER HAS TYPES, WE ARE CONTROLING THE INFO THROUGH REACT, AND 
    STORING THE INPUT IN OUR STATE. SO WE CAN CONTORLL IT. THE INPUT TAG GETS THE TERM FROM
    REACT ITSELF.*/

    render() {
        return (
            <div className='SearchBar ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <i className='car icon' onClick={(e)=>this.setState({term: 'Alfa Romeo Guilia Quadrifoglio'})}></i>
                        <label>Image Search</label>
                        <input
                            type="text"
                            onClick={this.onInputClicked} 
                            value={this.state.term} //provides the pre-render value to the input text.
                            //onChange={this.onInputChanged}
                            onChange={(e)=>this.setState({term: e.target.value})}//takes the value, puts it in state, that causes the render() to be called, which erases the previous input text, so now we provide it with the value before it ahd re-rendered. 
                        >
                        </input>
                        <div>{this.state.term}</div>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;