import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading'>
            <h3 className='text'>Loading...</h3>
            <i className='huge spinner loading icon'></i>
        </div>
    );
}

export default Loading;