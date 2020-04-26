import React from 'react';
import SI from './Seperateimages';//din't work, try to make it work. 
import '../css/ImageList.css';
class ImageList extends React.Component {

    /*
    {{
        for (var i=0; i<this.props.images.length; i++){
            this.props.images.map(image=>return <div>image</div>)
        }
    }}
    */

    seperateimage = (size) => {

        console.log('seperateimage called');

        return  this.props.images.map((image) =>  {
                    return  <div key={image.id}>
                                <img alt={image.description} src={image.urls.thumb}></img>
                            </div>
            });
    }
    //dame dame, the 
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

