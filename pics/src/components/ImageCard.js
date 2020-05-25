import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state={spans: 0};

        this.imageRef= React.createRef();
        //imageRef is custom //creaRef is necessary 
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load',this.setHeight);
    }//for listnening the loading of image. then launching the function setHeight to figure out the height and set it in State. 

    setHeight = () => {
        const height=this.imageRef.current.clientHeight;
        const span=Math.ceil((height/5)+4);//we chose 5px as the height of 1 row. hence we calc how many rows we need. we add +4 for white space between images
        this.setState({spans: span});
    }

    render() {
        return (
            <div style={{  gridRowEnd:`span ${this.state.spans}`  }} >
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.thumb} />
            </div>
        )//ref is a property of image

    }
} 

export default ImageCard;