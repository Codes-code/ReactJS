import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = { //object

    summer: {
        text1: "Yay,it's Sunny! ",
        text2: " Let's hit the Beach! Explore the Town and Go Swimming!",
        iconName: "sun",
        colour: "orange"
    },

    winter: {
        text1: "Burr, it's Chilly! ",
        text2: " Let's take a Warm Bath! Make Hot Chocolate and Cookies!",
        iconName: "snowflake",
        colour: "teal"
    }
}

const GetSeason = (lat,month) => {//helper function

    if(month>2 && month<9){
        return lat>0? 'summer' : 'winter';
    }
    else return lat>0? 'winter' : 'summer';
}

const SeasonDisplay = (props) =>{//main function
    
    const SeasonName=GetSeason(props.lat, new Date().getMonth());
    const {text1, text2, iconName, colour} = SeasonConfig[SeasonName];

    return (
        <div className={`season-display ${SeasonName}`}>
            <i className={`icon-left massive loading ${iconName} icon`}></i>
            <h1 className="ui header">{text1}</h1>
            <h1 className="ui header">{text2}</h1>
            <i className={`icon-right massive loading ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;