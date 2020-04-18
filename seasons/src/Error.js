import React from 'react';
import './Items.css';
import Faker from 'faker';

const Error = (props) => {
    return (
        <div className='error'>
            <div className='items'>
                <h2>
                    An Error has occured <br/>
                    {props.errmessage} <br/>
                    <br/>
                    <img alt='Oops' src={Faker.image.animals()} />
                </h2>
            </div>
        </div>
    );
}

export default Error;