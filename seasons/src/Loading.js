import React from 'react';
import './Items.css';

const Loading = (props) => {
    return (
        <div className='loading'>
            <div className=' items'>
                <i className='huge spinner loading icon'></i> 
                <br/>
                <br/>
                <h3 className='text'>{props.text}</h3>
            </div>
        </div>
    );
}

Loading.defaultProps = {//object for when we don't pass props to Loading Component
    text: 'Loading...'
}

export default Loading;