import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

  
    seperateimage = (size) => {

        return  this.props.images.map((image) =>  {
                    return  <ImageCard key={image.id} image={image} />
            });// we're using 'key' to facilitate 'map' to function properly
    } 
    

    render() {

        return (
            <div className='image-list ui segment' style={{marginTop:'30px'}}>
                <div className='image-list-images'>
                    {this.seperateimage()}
                </div>
            </div>
        );
    }
}

export default ImageList;
