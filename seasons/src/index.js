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
import Loading from './Loading';
import Error from './Error'; 
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
        super(props);//reference to parents constructor with props

        // now this can be referenced anywhere inside the class. Basically like a JAVA Object. we only use this.state once. then we use this.setState
        this.state={lat:null, errMessage:null};// 1st way to initialize state. 
    }

    //2nd way to initialize state. this below is equal to all of the constructor's job for now. 
    //state={lat:null, errMessage:null};

    //constructor vs componentDidMount--- react devs say best practice is to do data loading in this and not constructor. reason being it looks ByteLengthQueuingStrategy, easy to understand
    componentDidMount() {

        console.log("Component - App - initialized");

        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat: position.coords.latitude})}, //as soon as setState is called, and and state is changed, the render method will be called again. 
            err=>{this.setState({errMessage:err.message})}        
        );             
    }

    //will be used when we wanna for eg. make a network request every single time user clicks, or every single time user does something and state is updated or the component is rerendered. 
    componentDidUpdate() {

        console.log("Component - App - updated");

    }

    componentWillUnmount() {

        console.log("Component - App - UnMounted");

    }    

    //every class has to have render method (render function)
    //render method gets recalled alot of times. so don't declare stuff in here. use other methods for most stuff. 
    render() {

        if(this.state.lat ==0){
            return <div>get the f off the Equator</div>
        }
        else if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        else if(this.state.errMessage && !this.state.lat){
            return <div> <Error errmessage={this.state.errMessage}/> </div>
        }

        else {return <div><Loading/></div>}
        
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);