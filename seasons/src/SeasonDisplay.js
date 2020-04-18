import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = { //object

    summer: {
        text: "Let's hit the Beach!",
        iconName: "sun",
        colour: "orange"
    },

    winter: {
        text: "Burr, it's Chilly!",
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
    const {text, iconName, colour} = SeasonConfig[SeasonName];

    return (
        <div className={`season-display ${SeasonName}`}>
            <i className={`icon-left massive loading ${iconName} icon`}></i>
            <h1 className="ui header">{text}</h1>
            <i className={`icon-right massive loading ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;