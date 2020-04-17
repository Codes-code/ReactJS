import React from 'react';
import './Error.css';

const Error = (props) => {
    return (
        <div className='error'>
            <h2>
                Error has occured <br/>
                {props.errmessage}
            </h2>
        </div>
    );
}

export default Error;