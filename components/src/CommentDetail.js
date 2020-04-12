import React from 'react';

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.dateandtime}
                    </span>
                    <span className="sex">
                        {props.sex}
                    </span>  
                </div>
                <div className="text">
                    {props.text}
                </div> 
            </div>
        </div>
    )
}

//to export, make this file available to outside files
export default CommentDetail;


