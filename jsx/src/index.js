//IMPORT THE REACT AND REACTDOM LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';


// CREATE A REACT COMPONENT



  

const App=()=>{


    const label_1={text:"Enter Name Here:"};
    const input_1="Name";
    const button_1={text:"Press Me Please"};
    const style_heading_1={color:"blue", backgroundColor:"yellow", padding:20};


    return (
 
    <div>
        <label style={style_heading_1}>HEADING</label> <br/>
        <label style={{ color:"white", backgroundColor:"purple" }} className="label" for="name">{label_1.text}</label>
        <input style={{ color:"black", backgroundColor:"orange" }} id="name" type="text"/>
        <button style={{ color:"white", backgroundColor:"blue" }}>{button_1.text}</button>    
  </div>

  /*  HTML CODE that i converted to jsx above. 
  <div>
  <label style="color:white; background-color:purple;" class="label" for="name">Your Name Here:</label>
  <input style="color:black; background-color:orange;" id="name" type="text"/>
  <button style="color:white; background-color:blue;">Submit</button>
  </div>  */

    );
};


//TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(
    <App/>, /*what to show*/ document.querySelector('#root') /*where to show*/

    
);
