import React from 'react';
import SI from './Seperateimages';
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
                    return <img alt='/' src={image.urls.thumb}></img>
            });
    }

    render() {

        return (
            <div className='ImageList ui segment' style={{marginTop:'30px'}}>
                <h5>Image List</h5>
                <div>No. of Images Found: {this.props.images.length}</div>
                <div>------>------>------>------>------</div>
                <div>
                    <SI 
                        images={this.props.images} 
                        size='thumb' 
                    /> 
                </div>
                <div>------>------>------>------>------</div>
                <div>{this.seperateimage()}</div>
                <div>------>------>------>------>------</div>
            </div>
        );
    }
}

export default ImageList;

