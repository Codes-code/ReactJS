import React from 'react';

const SI = (props) => {

    console.log('seperateimageSSSS called');
    const siz=props.size;
    const temp='images.urls.'+siz
    console.log(temp)

    return  props.images.map((image) =>  {
                return <img alt='/' src={{temp}}></img>
        });
}


export default SI;