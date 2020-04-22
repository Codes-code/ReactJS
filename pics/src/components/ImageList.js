import React from 'react';
import Faker from 'faker';

class ImageList extends React.Component {

    state={};

    render() {
        return (
            <div className='ImageList ui segment'>
                <h4 >ImageList</h4>
                <img alt='/' src={Faker.image.avatar()} />
                <img alt='/' src={Faker.image.avatar()} />
                <img alt='/' src={Faker.image.avatar()} />
            </div>
        );
    }
}

export default ImageList;