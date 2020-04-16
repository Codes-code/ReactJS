import React from 'react';
import CSS from './SeasonDisplay';

const SeasonConfig = { //object

    Summer: {
        text: "Let's hit the Beach!",
        iconName: "sun",
        colour: "yellow"
    },

    Winter: {
        text: "Burr, it's Chilly!",
        iconName: "snowflake",
        colour: "blue"
    }
}

const GetSeason = (lat,month) => { 

    var season=null;

    if(month>2 && month<9){
        season=lat>0? 'Summer' : 'Winter';
    }
    else season=lat>0? 'Winter' : 'Summer';

    return season;
}

const SeasonDisplay = (props) =>{
    
    const Season=GetSeason(props.lat, new Date().getMonth());
    const {text, iconName, colour} = SeasonConfig[Season];

    return (
        <div>
            <i className={`icon-left massive ${colour} ${iconName} icon`}></i>
            <h1 className="ui header">{text}</h1>
            <i className={`icon-right massive ${colour} ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay; 