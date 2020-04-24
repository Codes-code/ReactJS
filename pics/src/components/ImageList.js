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
                    return <div key={image.id}><img alt={image.description} src={image.urls.thumb}></img></div>
            });
    }
    //dame dame, the 
    render() {

        return (
            <div className='ImageList ui segment' style={{marginTop:'30px'}}>
                <h5>Image List</h5>
                <div>No. of Images Found: {this.props.images.length}</div>

                {/*<div>
                    <SI 
                        images={this.props.images} 
                        size='thumb' 
                    /> 
                </div>*/}

                <div style={{display: grid}}>{this.seperateimage()}</div>

            </div>
        );
    }
}

export default ImageList;

