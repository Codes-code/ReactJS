//To understand the differences between Class Components and Functional Components
/* if the user's location is northern hemisphere and between october and march OR south 
and between match and october THEN chilly but if northern and between march and october 
OR south and between october and march THEN hit the BEACH */

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => { //functional component

    window.navigator.geolocation.getCurrentPosition(
        position=>console.log(position),
        err=>console.log(err)
    );

    return(
    <div className="ui icon header">
        <h3>Setting Hori</h3>
    </div>
    );
}


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);