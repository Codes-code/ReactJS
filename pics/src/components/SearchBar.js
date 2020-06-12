import React from 'react';

class SearchBar extends React.Component {

    state={term:''};
    
    onInputClicked = (event) => {
        console.log("input clicked-- "+ event.target.value); 
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.whenSubmit(this.state.term);//props of the class 'searchbar' , we don't pass it in brackets in the declaration of class. 
    }


    //THIS refers to the object to the left of the function call.
    /* Ways of solving 'this' problem 1-- make the callback function,
     an arrow function. that makes it refer to the main class. 
     2-- make a constructor and bind the function with the current class
      using this.example=this.drive.bind(this) 3-- is to invoke an arrow function, 
      to call the main function itself. so ina sense using 2 function calls. 
      like  onSubmit={(e) => this.onFormSubmit(e)  , this method is also using 
        the arrow function route.  */



    /* INSTEAD OF STORING INFORMATION INSIDE THE DOM, AND HAVING TO GO TO THE INPUT TAG
    TO GET TO KNOW WHAT THE USER HAS TYPES, WE ARE CONTROLING THE INFO THROUGH REACT, AND 
    STORING THE INPUT IN OUR STATE. SO WE CAN CONTORLL IT. THE INPUT TAG GETS THE TERM FROM
    REACT ITSELF.*/

    render() {
        return (
            <div className='SearchBar ui segment'>
                <form  onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <i className='image icon' onClick={(e)=>this.setState({term: 'Alfa Romeo'})}></i>
                        <input
                            type="text"
                            placeholder="e.g. Ice Cream or Alfa Romeo"
                            onClick={this.onInputClicked} 
                            value={this.state.term}
                            onChange={(e)=>this.setState({term: e.target.value})}
                            //takes the value, puts it in state, that causes the render() to be called, which erases the previous input text, so now we provide it with the term through the 'value=' before it had re-rendered. we're doing unnecessary work, just to make sure 'state' and 'react' have all the power. 
                            //for eg. if we want Capital text to appear, no matter what the user types. then we can do that. or if we want starred items to appear no matter what the user types. 
                        >
                        </input>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;