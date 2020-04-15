//To understand the differences between Class Components and Functional Components
/* if the user's location is northern hemisphere and between october and march OR south 
and between match and october THEN chilly but if northern and between march and october 
OR south and between october and march THEN hit the BEACH */
//get physical location
//get current month
//change styling and text based on those parameters

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
 
/*const App = () => { //functional component

    window.navigator.geolocation.getCurrentPosition(
        position=>console.log(position),
        err=>console.log(err)
    );

    var pos=position.coords.latitude;
    return(
    <div className="ui icon header">
        <h3>{{pos}}</h3>
    </div>
    );
}*/


class App extends React.Component {

    /* constructor - very first function to be called any time an instance of this app 
    is created. any time we create a new instance of this app component 
    and show it on the screen, constructor funtion will be automatically called first */
    //good way to initialize state object
    constructor(props) {
        super(props); //reference to parents constructor with props
        this.state={lat:null, errMessage:null};// now this can be referenced anywhere inside the class. Basically like a JAVA Object. we only use this.state once. then we use this.setState
        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat: position.coords.latitude})}, //as soon as setState is called, and and state is changed, the render method will be called again. 
            //err=>{console.log(err)},
            err=>{this.setState({errMessage:err.message})}
        );

    }

    //every class has to have render method (render function)
    //render method gets recalled alot of times. so don't declare stuff in here. use other methods for most stuff. 
    render() {

        if(this.state.errMessage && this.state.lat){
        return <div>Latitude is: {this.state.lat}, but this error popped up- {this.state.errMessage}</div>
        }

        if(this.state.lat){
        return <div>Latitude is: {this.state.lat}</div>
        }

        if(this.state.errMessage && !this.state.lat){
        return <div>Oops, Something went wrong. Error- {this.state.errMessage}</div>
        }
        
        return <div>Loading...</div>
        
        
    }
}


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);